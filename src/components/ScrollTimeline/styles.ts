import styled, { css, keyframes } from 'styled-components';
import { colors, breakpoints } from '../../styles/theme';

type Kind = 'professional' | 'academic';

const PRO = colors.primary;      // professional = purple
const ACA = colors.secondary;    // academic = cyan
export const kindColor = (k: Kind) => (k === 'professional' ? PRO : ACA);

/** Width of the center lane (rail + date labels). */
export const LANE = 150;
/** Vertical point of the viewport where the "now" of the timeline is. */
export const ANCHOR = 0.45;

const pulse = keyframes`
    0%   { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.6); }
    70%  { box-shadow: 0 0 0 18px rgba(139, 92, 246, 0); }
    100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
`;

const MOBILE = `@media (max-width: ${breakpoints.tablet})`;
const noMotion = `@media (prefers-reduced-motion: reduce)`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1rem 6rem;
`;

export const Legend = styled.div`
    display: grid;
    grid-template-columns: 1fr ${LANE}px 1fr;
    margin-bottom: 1.5rem;
    font-weight: 700;
    font-size: 0.95rem;

    span:first-child { text-align: right; color: ${PRO}; }
    span:last-child  { grid-column: 3; color: ${ACA}; }

    ${MOBILE} {
        grid-template-columns: 1fr;
        gap: 0.25rem;
        span:first-child, span:last-child { grid-column: 1; text-align: left; }
    }
`;

export const Track = styled.div`
    position: relative;
`;

const lineX = css`
    left: 50%;
    transform: translateX(-50%);
    ${MOBILE} { left: 20px; }
`;

export const Rail = styled.div`
    position: absolute;
    top: 0;
    width: 4px;
    border-radius: 4px;
    background: rgba(203, 213, 225, 0.12);
    ${lineX}
`;

export const RailFill = styled.div`
    position: absolute;
    top: 0;
    width: 4px;
    border-radius: 4px;
    background: linear-gradient(180deg, ${ACA}, ${PRO} 60%, ${colors.accent});
    box-shadow: 0 0 16px rgba(139, 92, 246, 0.55);
    ${lineX}
`;

/** Thin colored bar beside the rail covering an activity's period (start → end). */
export const PeriodBar = styled.div<{ $kind: Kind; $on: boolean }>`
    position: absolute;
    width: 6px;
    border-radius: 6px;
    left: calc(50% ${(p) => (p.$kind === 'professional' ? '- 14px' : '+ 8px')});
    background: ${(p) => kindColor(p.$kind)};
    opacity: ${(p) => (p.$on ? 0.85 : 0.22)};
    box-shadow: ${(p) => (p.$on ? `0 0 12px ${kindColor(p.$kind)}` : 'none')};
    transition: opacity 0.4s ease, box-shadow 0.4s ease;
`;

/** Dot on the rail at an activity's start, with its month/year. */
export const StartDot = styled.div<{ $kind: Kind; $active: boolean }>`
    position: absolute;
    z-index: 2;
    width: 14px;
    height: 14px;
    margin-top: -7px;
    border-radius: 50%;
    background: ${(p) => (p.$active ? kindColor(p.$kind) : colors.background.main)};
    border: 3px solid ${(p) => (p.$active ? kindColor(p.$kind) : 'rgba(203, 213, 225, 0.35)')};
    transition: background 0.4s ease, border-color 0.4s ease;
    ${lineX}

    span {
        position: absolute;
        top: 50%;
        ${(p) => (p.$kind === 'professional' ? 'right: 26px;' : 'left: 26px;')}
        transform: translateY(-50%);
        font-size: 0.72rem;
        font-weight: 700;
        white-space: nowrap;
        color: ${(p) => (p.$active ? kindColor(p.$kind) : colors.text.muted)};
        transition: color 0.4s ease;
    }
`;

export const Traveler = styled.div`
    position: absolute;
    z-index: 4;
    width: 22px;
    height: 22px;
    margin-top: -11px;
    border-radius: 50%;
    background: ${colors.text.primary};
    border: 4px solid ${PRO};
    animation: ${pulse} 1.8s ease-out infinite;
    ${lineX}

    span {
        position: absolute;
        left: 50%;
        top: -30px;
        transform: translateX(-50%);
        padding: 0.15rem 0.6rem;
        border-radius: 999px;
        font-size: 0.75rem;
        font-weight: 800;
        white-space: nowrap;
        color: ${colors.text.primary};
        background: ${colors.background.main};
        border: 1px solid rgba(139, 92, 246, 0.6);
    }

    ${MOBILE} {
        span { left: 30px; top: 50%; transform: translateY(-50%); }
    }
    ${noMotion} { animation: none; }
`;

/** Absolute lane segment from the activity's start to its end; the card sticks inside it. */
export const Span = styled.div<{ $kind: Kind }>`
    position: absolute;
    ${(p) => (p.$kind === 'professional'
        ? `left: 0; right: calc(50% + ${LANE / 2}px);`
        : `left: calc(50% + ${LANE / 2}px); right: 0;`)}
`;

export const StickyCard = styled.article<{ $kind: Kind; $state: 'future' | 'ongoing' | 'past' }>`
    position: sticky;
    top: calc(${ANCHOR * 100}vh - 34px);
    z-index: ${(p) => (p.$state === 'ongoing' ? 3 : 1)};
    padding: 1.2rem 1.3rem;
    border-radius: 16px;
    background: ${colors.background.secondary};
    background-image: ${colors.gradients.card};
    border: 1px solid ${colors.borderLight};
    border-${(p) => (p.$kind === 'professional' ? 'right' : 'left')}: 3px solid ${(p) => kindColor(p.$kind)};
    box-shadow: ${(p) => (p.$state === 'ongoing' ? `0 12px 36px rgba(0,0,0,0.35), 0 0 0 1px ${kindColor(p.$kind)}55` : 'none')};
    opacity: ${(p) => ({ future: 0, ongoing: 1, past: 0.2 }[p.$state])};
    transform: ${(p) => (p.$state === 'future'
        ? `translate3d(${p.$kind === 'professional' ? '-48px' : '48px'}, 0, 0)`
        : p.$state === 'past' ? 'scale(0.97)' : 'none')};
    transition: opacity 0.5s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease;

    &:hover { opacity: 1; }

    ${noMotion} { transition: none; transform: none; }
`;

/* ---------- mobile: simple list ---------- */

export const Row = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;
    padding: 1.1rem 0;
`;

export const Node = styled.div<{ $kind: Kind; $active: boolean }>`
    justify-self: center;
    z-index: 2;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${(p) => (p.$active ? kindColor(p.$kind) : colors.background.main)};
    border: 3px solid ${(p) => (p.$active ? kindColor(p.$kind) : 'rgba(203, 213, 225, 0.35)')};
    transition: background 0.4s ease, border-color 0.4s ease;
`;

export const ListCard = styled.article<{ $kind: Kind; $active: boolean }>`
    padding: 1.1rem 1.2rem;
    border-radius: 16px;
    background: ${colors.gradients.card};
    border: 1px solid ${colors.borderLight};
    border-left: 3px solid ${(p) => kindColor(p.$kind)};
    opacity: ${(p) => (p.$active ? 1 : 0)};
    transform: ${(p) => (p.$active ? 'none' : 'translate3d(32px, 0, 0)')};
    transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    ${noMotion} { opacity: 1; transform: none; transition: none; }
`;

/* ---------- card content ---------- */

export const Meta = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: ${colors.text.muted};
`;

export const Badge = styled.span<{ $color?: string }>`
    padding: 0.1rem 0.55rem;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 700;
    color: ${(p) => p.$color ?? colors.text.secondary};
    background: rgba(15, 23, 42, 0.55);
    border: 1px solid ${(p) => (p.$color ? `${p.$color}66` : colors.borderLight)};
`;

export const Title = styled.h3`
    margin: 0.5rem 0 0.15rem;
    font-size: 1.1rem;
`;

export const Company = styled.div<{ $kind: Kind }>`
    font-weight: 700;
    font-size: 0.9rem;
    color: ${(p) => kindColor(p.$kind)};
`;

export const Description = styled.p`
    margin: 0.55rem 0 0;
    font-size: 0.88rem;
    color: ${colors.text.secondary};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const Chips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: 0.7rem;

    span {
        padding: 0.15rem 0.5rem;
        border-radius: 6px;
        font-size: 0.72rem;
        color: ${colors.text.secondary};
        background: rgba(15, 23, 42, 0.6);
    }
`;

export const Parallel = styled.div`
    margin-top: 0.65rem;
    font-size: 0.75rem;
    color: ${colors.text.muted};
`;

export const DetailsButton = styled.button`
    margin-top: 0.8rem;
    padding: 0.4rem 0.9rem;
    font-size: 0.8rem;
    border-radius: 999px;
    background: transparent;
    border: 1px solid rgba(139, 92, 246, 0.5);
    &:hover { background: ${colors.gradients.primary}; border-color: transparent; }
`;

/* ---------- finale ---------- */

export const Finale = styled.div<{ $active: boolean }>`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    opacity: ${(p) => (p.$active ? 1 : 0.25)};
    transform: ${(p) => (p.$active ? 'none' : 'translateY(24px) scale(0.97)')};
    transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);

    ${MOBILE} { align-items: flex-start; text-align: left; padding-left: 48px; padding-top: 1.5rem; }
    ${noMotion} { opacity: 1; transform: none; transition: none; }
`;

export const NowDot = styled.div<{ $active: boolean }>`
    position: absolute;
    z-index: 3;
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    margin-top: -32px;
    border-radius: 50%;
    font-weight: 800;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    color: ${colors.text.primary};
    background: ${colors.gradients.accent};
    animation: ${(p) => (p.$active ? css`${pulse} 1.8s ease-out infinite` : 'none')};
    ${lineX}

    ${MOBILE} { width: 44px; height: 44px; margin-top: -22px; font-size: 0.6rem; }
`;

export const FinaleCard = styled.div`
    max-width: 620px;
    padding: 1.6rem;
    border-radius: 18px;
    background: ${colors.background.secondary};
    background-image: ${colors.gradients.card};
    border: 1px solid rgba(139, 92, 246, 0.4);

    h3 { margin: 0 0 0.5rem; font-size: 1.5rem; }
    p  { margin: 0; }
`;

export const FinaleActions = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 1.25rem;

    a, button {
        padding: 0.6rem 1.2rem;
        border-radius: 12px;
        font-weight: 700;
        font-size: 0.9rem;
    }
    a {
        color: ${colors.text.primary};
        border: 1px solid rgba(139, 92, 246, 0.5);
        &:hover { background: rgba(139, 92, 246, 0.2); color: ${colors.text.primary}; text-shadow: none; }
    }

    ${MOBILE} { justify-content: flex-start; }
`;
