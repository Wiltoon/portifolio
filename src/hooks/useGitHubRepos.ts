import { useEffect, useState } from 'preact/hooks';

export interface Repo {
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
    pushed_at: string;
    fork: boolean;
}

let cache: Promise<Repo[]> | null = null;

function fetchRepos(): Promise<Repo[]> {
    if (!cache) {
        cache = fetch('https://api.github.com/users/wiltoon/repos?type=owner&sort=pushed&per_page=100')
            .then((r) => {
                if (!r.ok) throw new Error(`GitHub ${r.status}`);
                return r.json() as Promise<Repo[]>;
            })
            .then((repos) => repos
                .filter((r) => !r.fork && r.name.toLowerCase() !== 'wiltoon' && !r.name.toLowerCase().includes('.github.io'))
                .sort((a, b) =>
                    Number(Boolean(b.description)) - Number(Boolean(a.description))
                    || b.stargazers_count - a.stargazers_count
                    || new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()))
            .catch((err) => {
                cache = null; // allow a retry later
                throw err;
            });
    }
    return cache;
}

/** Featured repos for the guide: those with a description first, then stars, then recency. */
export function useGitHubRepos(enabled: boolean) {
    const [repos, setRepos] = useState<Repo[] | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!enabled || repos) return;
        let alive = true;
        setError(false);
        fetchRepos()
            .then((list) => alive && setRepos(list))
            .catch(() => alive && setError(true));
        return () => { alive = false; };
    }, [enabled]);

    return { repos, error, loading: enabled && !repos && !error };
}
