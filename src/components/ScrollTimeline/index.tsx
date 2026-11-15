import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'preact/hooks';
import { useLanguage, useT, localeOf } from '../../styles/languages/LanguageProvider';
import {
    getExperiences,
    Experience,
    formatDuration,
    formatPeriod,
    isCurrent,
    overlapping,
    shortCompany,
    parseDate,
    companyLabel,
} from '../../content/career';
import { LINKS } from '../../content/about';
import { colors } from '../../styles/theme';
import {
    ANCHOR, Wrapper, Legend, Track, Rail, RailFill, PeriodBar, StartDot, Traveler, Span, StickyCard,
    Row, Node, ListCard, Meta, Badge, Title, Company, Description, Chips, Parallel, DetailsButton,
    Finale, NowDot, FinaleCard, FinaleActions,
} from './styles';

interface ScrollTimelineProps {
    onSelect: (exp: Experience) => void;
    onNavigate?: (page: string) => void;
    /** Experience to scroll to on mount (e.g. picked in the guide). */
    focusId?: string | null;
}

/** Pixels per month on the desktop (time-proportional) layout. */
const PX_PER_MONTH = 32;
const TOP_PAD = 40;

/** Fractional months between two dates. */
const monthsBetween = (from: Date, to: Date) =>
    (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth()) + (to.getDate() - from.getDate()) / 30;

function useIsMobile() {
    const query = '(max-width: 768px)';
    const [mobile, setMobile] = useState(() => window.matchMedia(query).matches);
    useEffect(() => {
        const mq = window.matchMedia(query);
        const onChange = () => setMobile(mq.matches);
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);
    return mobile;
}

/** Scroll progress (px) of the viewport anchor inside `ref`, clamped to [0, max]. */
function useScrollProgress(ref: { current: HTMLElement | null }, max: number) {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        let frame = 0;
        const update = () => {
            frame = 0;
            const el = ref.current;
            if (!el) return;
            const top = el.getBoundingClientRect().top;
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
            const raw = atBottom ? max : window.innerHeight * ANCHOR - top;
            setProgress(Math.max(0, Math.min(max, raw)));
        };
        const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, [max]);
    return progress;
}

/**
 * Career timeline driven by scroll. On desktop it is time-proportional: each activity occupies
 * the stretch of the rail from its start to its end and its card stays pinned next to the moving
 * dot while the activity is ongoing — so overlapping activities (studying + working) show side by side.
 */
export function ScrollTimeline({ onSelect, onNavigate, focusId }: ScrollTimelineProps) {
    const [language] = useLanguage();
    const t = useT();
    const isMobile = useIsMobile();
    const experiences = getExperiences(language);

    // ---------- geometry (desktop) ----------
    const origin = useMemo(() => {
        const first = parseDate(experiences[0].startDate);
        return new Date(first.getFullYear(), first.getMonth(), 1);
    }, [experiences]);
    const today = useMemo(() => new Date(), []);
    const yOf = (d: Date) => TOP_PAD + monthsBetween(origin, d) * PX_PER_MONTH;
    const endDate = (e: Experience) => (isCurrent(e) ? today : parseDate(e.endDate));
    const nowY = yOf(today);

    const cardRefs = useRef<(HTMLElement | null)[]>([]);
    const [cardH, setCardH] = useState(340);
    useLayoutEffect(() => {
        const measure = () => {
            const tallest = Math.max(0, ...cardRefs.current.map((c) => c?.offsetHeight ?? 0));
            if (tallest) setCardH(tallest);
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, [language, isMobile]);

    const trackRef = useRef<HTMLDivElement>(null);
    const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
    const mobileEnd = useRef(1);
    const progress = useScrollProgress(trackRef, isMobile ? mobileEnd.current : nowY);

    // ---------- focus an experience picked in the guide ----------
    useEffect(() => {
        if (!focusId) return;
        const index = experiences.findIndex((e) => e.id === focusId);
        if (index < 0) return;
        const id = window.setTimeout(() => {
            if (isMobile) {
                rowRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                return;
            }
            const trackTop = trackRef.current!.getBoundingClientRect().top + window.scrollY;
            const target = trackTop + yOf(parseDate(experiences[index].startDate)) + 60 - window.innerHeight * ANCHOR;
            window.scrollTo({ top: target, behavior: 'smooth' });
        }, 400);
        return () => window.clearTimeout(id);
    }, [focusId]);

    // ---------- labels ----------
    const monthYear = (d: Date) => {
        const label = d.toLocaleDateString(localeOf(language), { month: 'short', year: 'numeric' });
        return label.charAt(0).toUpperCase() + label.slice(1);
    };
    const kindLabel = (exp: Experience) => exp.kind === 'professional'
        ? t({ EN: 'Professional', BR: 'Profissional', ES: 'Profesional' })
        : t({ EN: 'Academic', BR: 'Acadêmico', ES: 'Académico' });

    const renderContent = (exp: Experience, ongoing: boolean) => {
        const parallel = overlapping(exp);
        return (
            <>
                <Meta>
                    <span>{formatPeriod(exp, language)}</span>
                    <Badge>{formatDuration(exp, language)}</Badge>
                    {isCurrent(exp) && <Badge $color={colors.success}>● {t({ EN: 'Current', BR: 'Atual', ES: 'Actual' })}</Badge>}
                    {!isCurrent(exp) && ongoing && <Badge $color={colors.accent}>{t({ EN: 'In progress', BR: 'Em andamento', ES: 'En curso' })}</Badge>}
                </Meta>
                <Title>{exp.title}</Title>
                <Company $kind={exp.kind}>{companyLabel(exp, language)} · {kindLabel(exp)}</Company>
                <Description>{exp.description}</Description>
                <Chips>{exp.languages.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}</Chips>
                {parallel.length > 0 && (
                    <Parallel>
                        ⟷ {t({ EN: 'In parallel with', BR: 'Em paralelo com', ES: 'En paralelo con' })}{' '}
                        {parallel.map(shortCompany).join(', ')}
                    </Parallel>
                )}
                <DetailsButton onClick={() => onSelect(exp)}>
                    {t({ EN: 'View details', BR: 'Ver detalhes', ES: 'Ver detalles' })} →
                </DetailsButton>
            </>
        );
    };

    const finaleContent = (
        <FinaleCard>
            <h3>🚀 {t({ EN: 'Ready for new challenges!', BR: 'Pronto para novos desafios!', ES: '¡Listo para nuevos desafíos!' })}</h3>
            <p>
                {t({
                    EN: "That's my journey so far. I'm open to opportunities where back-end, cloud and AI meet — let's talk?",
                    BR: 'Essa é minha jornada até aqui. Estou aberto a oportunidades onde back-end, cloud e IA se encontram — vamos conversar?',
                    ES: 'Esta es mi trayectoria hasta ahora. Estoy abierto a oportunidades donde se encuentran back-end, cloud e IA — ¿hablamos?',
                })}
            </p>
            <FinaleActions>
                {onNavigate && (
                    <button onClick={() => onNavigate('contact')}>📬 {t({ EN: 'Contact me', BR: 'Fale comigo', ES: 'Contáctame' })}</button>
                )}
                <a href={LINKS.linkedin} target="_blank" rel="noreferrer">💼 LinkedIn</a>
            </FinaleActions>
        </FinaleCard>
    );

    const legend = (
        <Legend>
            <span>💼 {t({ EN: 'Professional', BR: 'Profissional', ES: 'Profesional' })}</span>
            <span>🎓 {t({ EN: 'Academic', BR: 'Acadêmico', ES: 'Académico' })}</span>
        </Legend>
    );

    // ---------- mobile: one column list ----------
    if (isMobile) {
        const centerOf = (el: HTMLElement | null) => (el ? el.offsetTop + el.offsetHeight / 2 : Infinity);
        const trackH = trackRef.current?.offsetHeight ?? 1;
        mobileEnd.current = trackH;
        const activeIdx = experiences.reduce((acc, _, i) => (progress >= centerOf(rowRefs.current[i]) - 1 ? i : acc), -1);
        const done = progress >= trackH - 2;
        return (
            <Wrapper>
                {legend}
                <Track ref={trackRef}>
                    <Rail style={{ height: '100%' }} />
                    <RailFill style={{ height: `${progress}px` }} />
                    {!done && (
                        <Traveler style={{ top: `${progress}px` }}>
                            <span>{monthYear(parseDate(experiences[Math.max(0, activeIdx)].startDate))}</span>
                        </Traveler>
                    )}
                    {experiences.map((exp, i) => {
                        const active = i <= activeIdx;
                        return (
                            <Row key={exp.id} ref={(el: HTMLDivElement | null) => (rowRefs.current[i] = el)}>
                                <Node $kind={exp.kind} $active={active} />
                                <ListCard $kind={exp.kind} $active={active}>{renderContent(exp, false)}</ListCard>
                            </Row>
                        );
                    })}
                    <Finale $active={done}>{finaleContent}</Finale>
                </Track>
            </Wrapper>
        );
    }

    // ---------- desktop: time-proportional, sticky cards ----------
    const finaleActive = progress >= nowY - 2;
    const travelerDate = new Date(origin.getFullYear(), origin.getMonth() + Math.floor((progress - TOP_PAD) / PX_PER_MONTH), 1);

    return (
        <Wrapper>
            {legend}
            <Track ref={trackRef}>
                <Rail style={{ height: `${nowY}px` }} />
                <RailFill style={{ height: `${progress}px` }} />

                {experiences.map((exp) => {
                    const top = yOf(parseDate(exp.startDate));
                    const bottom = yOf(endDate(exp));
                    const on = progress >= top - 2 && progress <= bottom;
                    return (
                        <div key={`${exp.id}-marks`}>
                            <PeriodBar $kind={exp.kind} $on={on} style={{ top: `${top}px`, height: `${Math.max(6, bottom - top)}px` }} />
                            <StartDot $kind={exp.kind} $active={progress >= top - 2} style={{ top: `${top}px` }}>
                                <span>{monthYear(parseDate(exp.startDate))}</span>
                            </StartDot>
                        </div>
                    );
                })}

                {experiences.map((exp, i) => {
                    const top = yOf(parseDate(exp.startDate));
                    const bottom = yOf(endDate(exp));
                    const state = progress < top - 2 ? 'future' : progress <= bottom + 2 ? 'ongoing' : 'past';
                    return (
                        <Span key={exp.id} $kind={exp.kind} style={{ top: `${top - 30}px`, height: `${bottom - top + cardH + 30}px` }}>
                            <StickyCard
                                ref={(el: HTMLElement | null) => (cardRefs.current[i] = el)}
                                $kind={exp.kind}
                                $state={state}
                            >
                                {renderContent(exp, state === 'ongoing')}
                            </StickyCard>
                        </Span>
                    );
                })}

                {!finaleActive && (
                    <Traveler style={{ top: `${progress}px` }}><span>{monthYear(travelerDate)}</span></Traveler>
                )}
                <NowDot $active={finaleActive} style={{ top: `${nowY}px` }}>{t({ EN: 'NOW', BR: 'AGORA', ES: 'AHORA' })}</NowDot>

                <div style={{ height: `${nowY + cardH + 60}px` }} />
                <Finale $active={finaleActive}>{finaleContent}</Finale>
            </Track>
        </Wrapper>
    );
}
