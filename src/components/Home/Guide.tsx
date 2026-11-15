import { useEffect, useState } from 'preact/hooks';
import memeBack from '../../assets/mymeme-back.svg';
import { useLanguage, useT, localeOf } from '../../styles/languages/LanguageProvider';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useGitHubRepos, Repo } from '../../hooks/useGitHubRepos';
import { ABOUT, LINKS } from '../../content/about';
import {
    getExperiences, Experience, formatDuration, formatPeriod, overlapping, shortCompany, parseDate, companyLabel,
} from '../../content/career';
import {
    Stage, CharacterButton, Bubble, BubbleText, BubbleStep, Options, Option, Cursor,
} from './styles';

type Mode = 'greet' | 'menu' | 'about' | 'expList' | 'exp' | 'projList' | 'proj' | 'bye';

export type NavigateFn = (page: string, focus?: string | null) => void;

interface GuideProps {
    onNavigate: NavigateFn;
    /** Incremented by the "Let's work together?" button to open the menu. */
    openSignal: number;
}

interface Action {
    label: string;
    onClick: () => void;
    ghost?: boolean;
}

const icon = (exp: Experience) => (exp.kind === 'professional' ? '💼' : '🎓');

export function Guide({ onNavigate, openSignal }: GuideProps) {
    const [language] = useLanguage();
    const t = useT();
    const [mode, setMode] = useState<Mode>('greet');
    const [step, setStep] = useState(0);
    const [exp, setExp] = useState<Experience | null>(null);
    const [repo, setRepo] = useState<Repo | null>(null);
    const { repos, error: reposError, loading: reposLoading } = useGitHubRepos(mode === 'projList' || mode === 'proj');

    const go = (next: Mode, nextStep = 0) => {
        setMode(next);
        setStep(nextStep);
    };
    const openMenu = () => go('menu');

    useEffect(() => {
        if (openSignal > 0) openMenu();
    }, [openSignal]);

    const openExternal = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
        go('bye');
    };

    // ---------- what the character says (pages = multi-step speech) ----------
    const about = ABOUT[language];
    const newestFirst = [...getExperiences(language)].reverse();

    const expPages = (e: Experience): string[] => {
        const parallel = overlapping(e).map(shortCompany);
        const intro = t({
            EN: `${icon(e)} ${e.title} at ${companyLabel(e, language)} — ${formatPeriod(e, language)} (${formatDuration(e, language)}).`,
            BR: `${icon(e)} ${e.title} na ${companyLabel(e, language)} — ${formatPeriod(e, language)} (${formatDuration(e, language)}).`,
            ES: `${icon(e)} ${e.title} en ${companyLabel(e, language)} — ${formatPeriod(e, language)} (${formatDuration(e, language)}).`,
        }) + (parallel.length
            ? ' ' + t({ EN: 'At the same time: ', BR: 'Ao mesmo tempo: ', ES: 'Al mismo tiempo: ' }) + parallel.join(', ') + '.'
            : '');
        const highlights = (e.achievements?.length ? e.achievements : e.projects).slice(0, 3);
        return [
            intro,
            e.description,
            `⭐ ${t({ EN: 'Highlights', BR: 'Destaques', ES: 'Destacados' })}: ${highlights.join(' · ')}.`,
            `🧰 Stack: ${[...e.languages, ...e.databases].join(', ')}.`,
        ];
    };

    const repoPages = (r: Repo): string[] => {
        const updated = new Date(r.pushed_at).toLocaleDateString(localeOf(language), { year: 'numeric', month: 'short' });
        const raw = r.description?.trim();
        const desc = raw ? (/[.!?…]$/.test(raw) ? raw : `${raw}.`) : t({ EN: 'No description yet — but the code speaks for itself!', BR: 'Ainda sem descrição — mas o código fala por si!', ES: 'Aún sin descripción — ¡pero el código habla por sí mismo!' });
        const lang = r.language
            ? t({ EN: ` Mostly written in ${r.language}.`, BR: ` Feito principalmente em ${r.language}.`, ES: ` Hecho principalmente en ${r.language}.` })
            : '';
        return [`🚀 ${r.name}: ${desc}${lang} ⭐ ${r.stargazers_count} · ${t({ EN: 'updated', BR: 'atualizado em', ES: 'actualizado en' })} ${updated}.`];
    };

    const pages: string[] = (() => {
        switch (mode) {
            case 'greet':
                return [t({
                    EN: "Hi! I'm Wilton 👋 Click on me and I'll show you around — or scroll down to meet me.",
                    BR: 'Oi! Eu sou o Wilton 👋 Clique em mim que eu te mostro tudo — ou role a página para me conhecer.',
                    ES: '¡Hola! Soy Wilton 👋 Haz clic en mí y te muestro todo — o desliza para conocerme.',
                })];
            case 'menu':
                return [t({ EN: 'Awesome! What would you like to see?', BR: 'Show! O que você quer conhecer?', ES: '¡Genial! ¿Qué te gustaría ver?' })];
            case 'about':
                return about.map((a) => `${a.icon} ${a.text}`);
            case 'expList':
                return [t({
                    EN: 'Which experience are you curious about? I can tell you right here.',
                    BR: 'Qual experiência te interessa? Te conto por aqui mesmo.',
                    ES: '¿Qué experiencia te interesa? Te cuento aquí mismo.',
                })];
            case 'exp':
                return exp ? expPages(getExperiences(language).find((e) => e.id === exp.id) ?? exp) : [''];
            case 'projList':
                if (reposError) return [t({
                    EN: "GitHub isn't answering right now 😅 You can still see everything on the projects page.",
                    BR: 'O GitHub não respondeu agora 😅 Mas você pode ver tudo na página de projetos.',
                    ES: 'GitHub no responde ahora 😅 Pero puedes ver todo en la página de proyectos.',
                })];
                if (reposLoading) return [t({ EN: 'Fetching my GitHub projects…', BR: 'Buscando meus projetos no GitHub…', ES: 'Buscando mis proyectos en GitHub…' })];
                return [t({
                    EN: 'Here are some of my projects. Which one should I tell you about?',
                    BR: 'Esses são alguns dos meus projetos. Sobre qual quer saber?',
                    ES: 'Estos son algunos de mis proyectos. ¿Sobre cuál quieres saber?',
                })];
            case 'proj':
                return repo ? repoPages(repo) : [''];
            case 'bye':
                return [t({ EN: 'Opened in a new tab. Anything else? 😉', BR: 'Abri numa nova aba. Mais alguma coisa? 😉', ES: 'Lo abrí en una nueva pestaña. ¿Algo más? 😉' })];
        }
    })();

    const speech = pages[Math.min(step, pages.length - 1)];
    const speed = Math.min(22, Math.max(8, 3500 / Math.max(1, speech.length)));
    const { visible, done, skip } = useTypewriter(speech, speed);
    const hasNext = step < pages.length - 1;

    // ---------- the buttons under the speech ----------
    const L = {
        next: t({ EN: 'Next ›', BR: 'Próximo ›', ES: 'Siguiente ›' }),
        menu: t({ EN: '↩ Menu', BR: '↩ Menu', ES: '↩ Menú' }),
    };
    const nextAction: Action[] = hasNext ? [{ label: L.next, onClick: () => setStep((s) => s + 1) }] : [];
    const menuAction: Action = { label: L.menu, onClick: openMenu, ghost: true };

    const actions: Action[] = (() => {
        switch (mode) {
            case 'greet':
                return [{ label: t({ EN: 'Show me around ›', BR: 'Me mostra ›', ES: 'Muéstrame ›' }), onClick: openMenu }];
            case 'menu':
                return [
                    { label: t({ EN: '🧐 About me', BR: '🧐 Sobre mim', ES: '🧐 Sobre mí' }), onClick: () => go('about') },
                    { label: t({ EN: '🚀 Projects', BR: '🚀 Projetos', ES: '🚀 Proyectos' }), onClick: () => go('projList') },
                    { label: t({ EN: '💼 Experiences', BR: '💼 Experiências', ES: '💼 Experiencias' }), onClick: () => go('expList') },
                    { label: '🔗 LinkedIn', onClick: () => openExternal(LINKS.linkedin) },
                    { label: '🐙 GitHub', onClick: () => openExternal(LINKS.github) },
                    { label: t({ EN: '📬 Contact', BR: '📬 Contato', ES: '📬 Contacto' }), onClick: () => onNavigate('contact') },
                ];
            case 'about':
                return [
                    ...nextAction,
                    { label: t({ EN: 'Read it all ↓', BR: 'Ler tudo ↓', ES: 'Leer todo ↓' }), ghost: true, onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
                    menuAction,
                ];
            case 'expList':
                return [
                    ...newestFirst.map((e) => ({
                        label: `${icon(e)} ${shortCompany(e)} · ${parseDate(e.startDate).getFullYear()}`,
                        onClick: () => { setExp(e); go('exp'); },
                    })),
                    { label: t({ EN: '🗺️ Full timeline', BR: '🗺️ Linha do tempo', ES: '🗺️ Línea de tiempo' }), ghost: true, onClick: () => onNavigate('experiences') },
                    menuAction,
                ];
            case 'exp':
                return [
                    ...nextAction,
                    { label: t({ EN: '📍 See on timeline', BR: '📍 Ver na linha do tempo', ES: '📍 Ver en la línea de tiempo' }), ghost: true, onClick: () => onNavigate('experiences', exp?.id) },
                    { label: t({ EN: '↩ Other experience', BR: '↩ Outra experiência', ES: '↩ Otra experiencia' }), ghost: true, onClick: () => go('expList') },
                    menuAction,
                ];
            case 'projList':
                return [
                    ...(repos ?? []).slice(0, 6).map((r) => ({ label: `📁 ${r.name}`, onClick: () => { setRepo(r); go('proj'); } })),
                    ...(reposLoading ? [] : [{ label: t({ EN: '📂 See all projects', BR: '📂 Ver todos', ES: '📂 Ver todos' }), ghost: true, onClick: () => onNavigate('projects') }]),
                    menuAction,
                ];
            case 'proj':
                return [
                    ...(repo ? [{ label: t({ EN: 'Open on GitHub ↗', BR: 'Abrir no GitHub ↗', ES: 'Abrir en GitHub ↗' }), onClick: () => openExternal(repo.html_url) }] : []),
                    ...(repo?.homepage ? [{ label: '🌐 Demo ↗', onClick: () => openExternal(repo.homepage as string) }] : []),
                    { label: t({ EN: '↩ Other project', BR: '↩ Outro projeto', ES: '↩ Otro proyecto' }), ghost: true, onClick: () => go('projList') },
                    menuAction,
                ];
            case 'bye':
                return [{ label: L.menu, onClick: openMenu }];
        }
    })();

    return (
        <Stage>

            <CharacterButton
                $talking={!done}
                onClick={openMenu}
                aria-label={t({ EN: 'Open the guide menu', BR: 'Abrir o menu do guia', ES: 'Abrir el menú del guía' })}
            >
                <img src={memeBack} alt="" />
            </CharacterButton>

            <Bubble key={`${mode}-${step}-${exp?.id}-${repo?.name}-${language}-${reposLoading}`} role="status" aria-live="polite">
                <BubbleText onClick={skip} title={done ? undefined : t({ EN: 'Click to skip', BR: 'Clique para pular', ES: 'Haz clic para saltar' })}>
                    {visible}
                    {!done && <Cursor aria-hidden="true" />}
                </BubbleText>

                {pages.length > 1 && <BubbleStep>{step + 1} / {pages.length}</BubbleStep>}

                {done && actions.length > 0 && (
                    <Options>
                        {actions.map((a, i) => (
                            <Option key={a.label} $index={i} $ghost={a.ghost} onClick={a.onClick}>{a.label}</Option>
                        ))}
                    </Options>
                )}
            </Bubble>
        </Stage>
    );
}
