import { useMemo, useState, useEffect } from 'preact/hooks';
import mark from '../../assets/mark.svg';
import linkedIn from '../../assets/linkedin.svg';
import gitHub from '../../assets/github.svg';

import { useLanguage, useT } from '../../styles/languages/LanguageProvider';
import { LINKS } from '../../content/about';
import { Guide, NavigateFn } from './Guide';
import { Reveal } from '../Reveal';
import {
    HomeContainer,
    AvatarScreen,
    IntroScreen,
    Blobs,
    Intro,
    Greeting,
    Wave,
    NameRow,
    Name,
    Role,
    Cursor,
    Links,
    CTA,
} from './styles';

interface HomeProps {
    /** Switches page; defaults to scrolling to a same-page anchor (single-page layout). */
    onNavigate?: NavigateFn;
}

const scrollToAnchor: NavigateFn = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

/** Cycles through phrases with a type / pause / erase loop. */
function useRotatingRole(roles: string[]) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        setIndex(0);
        setText('');
        setDeleting(false);
    }, [roles]);

    useEffect(() => {
        const full = roles[index % roles.length];
        let delay = deleting ? 35 : 70;
        if (!deleting && text === full) delay = 1800;
        if (deleting && text === '') delay = 300;

        const id = window.setTimeout(() => {
            if (!deleting && text === full) return setDeleting(true);
            if (deleting && text === '') {
                setDeleting(false);
                return setIndex((i) => i + 1);
            }
            setText(full.slice(0, text.length + (deleting ? -1 : 1)));
        }, delay);
        return () => window.clearTimeout(id);
    }, [text, deleting, index, roles]);

    return text;
}

export function Home({ onNavigate = scrollToAnchor }: HomeProps) {
    const [language] = useLanguage();
    const t = useT();
    const [openSignal, setOpenSignal] = useState(0);

    const roles = useMemo(() => t({
        EN: ['Software Engineer · Back-end', 'Java · Python · TypeScript', 'AWS Certified Solutions Architect', 'Bringing AI into real products'],
        BR: ['Engenheiro de Software · Back-end', 'Java · Python · TypeScript', 'AWS Certified Solutions Architect', 'Levando IA para produtos reais'],
        ES: ['Ingeniero de Software · Back-end', 'Java · Python · TypeScript', 'AWS Certified Solutions Architect', 'Llevando IA a productos reales'],
    }), [language]);
    const role = useRotatingRole(roles);

    /** CTA lives on the second screen: scroll back up to the avatar and open its menu. */
    const openGuide = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setOpenSignal((n) => n + 1);
    };

    return (
        <HomeContainer>
            <Blobs aria-hidden="true"><span /><span /><span /></Blobs>

            <AvatarScreen>
                <Guide onNavigate={onNavigate} openSignal={openSignal} />
            </AvatarScreen>

            <IntroScreen>
                <Intro>
                    <Reveal>
                        <Greeting>
                            <Wave>👋</Wave>
                            {t({ EN: 'Welcome!', BR: 'Saudações!', ES: '¡Bienvenido!' })}
                        </Greeting>
                    </Reveal>
                    <Reveal delay={120}>
                        <NameRow>
                            <Name>Wilton<br />Costa</Name>
                            <img src={mark} alt="" height={52} width={52} />
                        </NameRow>
                    </Reveal>
                    <Reveal delay={240}>
                        <Role aria-label={roles[0]}>
                            {role}<Cursor aria-hidden="true" />
                        </Role>
                    </Reveal>
                    <Reveal delay={360}>
                        <Links>
                            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <img src={linkedIn} alt="" />
                            </a>
                            <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                                <img src={gitHub} alt="" />
                            </a>
                        </Links>
                    </Reveal>
                    <Reveal delay={480}>
                        <CTA onClick={openGuide}>
                            {t({ EN: "Let's work together?", BR: 'Vamos trabalhar juntos?', ES: '¿Trabajamos juntos?' })} <span>→</span>
                        </CTA>
                    </Reveal>
                </Intro>
            </IntroScreen>
        </HomeContainer>
    );
}
