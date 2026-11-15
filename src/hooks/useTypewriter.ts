import { useEffect, useState } from 'preact/hooks';

export function prefersReducedMotion(): boolean {
    return typeof window !== 'undefined'
        && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Types `text` one character at a time. Restarts whenever `text` changes.
 * Returns the visible slice, whether typing finished, and a `skip` to show it all at once.
 */
export function useTypewriter(text: string, speedMs = 22) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (prefersReducedMotion()) {
            setCount(text.length);
            return;
        }
        setCount(0);
        const id = window.setInterval(() => {
            setCount((c) => {
                if (c >= text.length) {
                    window.clearInterval(id);
                    return c;
                }
                return c + 1;
            });
        }, speedMs);
        return () => window.clearInterval(id);
    }, [text, speedMs]);

    const done = count >= text.length;
    return {
        visible: text.slice(0, count),
        done,
        skip: () => setCount(text.length),
    };
}
