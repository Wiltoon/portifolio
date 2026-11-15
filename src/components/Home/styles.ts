import styled, { css, keyframes } from 'styled-components';
import { colors, typography, breakpoints } from '../../styles/theme';

const fadeUp = keyframes`
    from { opacity: 0; transform: translate3d(0, 24px, 0); }
    to   { opacity: 1; transform: none; }
`;

const float = keyframes`
    0%, 100% { transform: translateY(0) rotate(-1deg); }
    50%      { transform: translateY(-14px) rotate(1deg); }
`;

const talk = keyframes`
    0%, 100% { transform: translateY(0) scale(1, 1); }
    25%      { transform: translateY(-3px) scale(1.01, 0.985); }
    75%      { transform: translateY(1px) scale(0.995, 1.01); }
`;

const wave = keyframes`
    0%, 60%, 100% { transform: rotate(0deg); }
    10%, 30%      { transform: rotate(14deg); }
    20%           { transform: rotate(-8deg); }
    40%           { transform: rotate(-4deg); }
    50%           { transform: rotate(10deg); }
`;

const blob = keyframes`
    0%, 100% { transform: translate(0, 0) scale(1); }
    33%      { transform: translate(30px, -40px) scale(1.1); }
    66%      { transform: translate(-25px, 20px) scale(0.95); }
`;

const blink = keyframes`
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
`;

const pop = keyframes`
    from { opacity: 0; transform: translateY(10px) scale(0.92); }
    to   { opacity: 1; transform: none; }
`;

const pulseRing = keyframes`
    0%   { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.55); }
    70%  { box-shadow: 0 0 0 14px rgba(139, 92, 246, 0); }
    100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
`;

const reducedMotion = css`
    @media (prefers-reduced-motion: reduce) {
        animation: none !important;
    }
`;

const enter = (delay: number) => css`
    opacity: 0;
    animation: ${fadeUp} 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms forwards;
    @media (prefers-reduced-motion: reduce) {
        opacity: 1;
        animation: none;
    }
`;

export const HomeContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

/** First screen: only the avatar and its speech bubble. */
export const AvatarScreen = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    min-height: calc(100vh - 80px - 3rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

/** Second screen: greeting, name, role, links and the call to action. */
export const IntroScreen = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Blobs = styled.div`
    /* full viewport width, clipped at the screen edges so the blur never causes horizontal scroll */
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
    overflow: hidden;
    pointer-events: none;
    z-index: 0;

    span {
        position: absolute;
        border-radius: 50%;
        filter: blur(60px);
        opacity: 0.35;
        animation: ${blob} 18s ease-in-out infinite;
        ${reducedMotion}
    }
    span:nth-child(1) { width: 320px; height: 320px; background: ${colors.primary}; top: 5%; left: 10%; }
    span:nth-child(2) { width: 260px; height: 260px; background: ${colors.secondary}; bottom: 5%; right: 15%; animation-delay: -6s; }
    span:nth-child(3) { width: 180px; height: 180px; background: ${colors.accent}; top: 40%; left: 45%; opacity: 0.18; animation-delay: -12s; }
`;

export const Intro = styled.div`
    position: relative;
    z-index: 1;
    font-family: ${typography.fontFamily.primary};
`;

export const Greeting = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.9rem;
    margin-bottom: 1.5rem;
    border-radius: 999px;
    font-size: 0.95rem;
    font-weight: 700;
    color: ${colors.text.primary};
    background: ${colors.gradients.card};
    border: 1px solid rgba(139, 92, 246, 0.35);
`;

export const Wave = styled.span`
    display: inline-block;
    transform-origin: 70% 70%;
    animation: ${wave} 2.4s ease-in-out 1s infinite;
    ${reducedMotion}
`;

export const NameRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const Name = styled.h1`
    margin: 0;
    font-size: clamp(2.6rem, 6vw, 4rem);
    line-height: 1.05;
    font-weight: 700;
    background: ${colors.gradients.accent};
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 8s ease infinite;
    ${reducedMotion}

    @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50%      { background-position: 100% 50%; }
    }
`;

export const Role = styled.div`
    margin-top: 1.25rem;
    min-height: 1.6em;
    font-size: 1.15rem;
    color: ${colors.text.secondary};
`;

export const Cursor = styled.span`
    display: inline-block;
    width: 2px;
    height: 1.1em;
    margin-left: 3px;
    vertical-align: text-bottom;
    background: ${colors.secondary};
    animation: ${blink} 1s step-end infinite;
`;

export const Links = styled.div`
    display: flex;
    gap: 0.9rem;
    margin-top: 1.5rem;
    justify-content: center;

    a {
        display: grid;
        place-items: center;
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: ${colors.cardOverlay};
        border: 1px solid ${colors.borderLight};
        transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;

        &:hover {
            transform: translateY(-4px) rotate(-4deg);
            border-color: ${colors.primary};
            background: rgba(139, 92, 246, 0.15);
        }
        img { width: 24px; height: 24px; }
    }
`;

export const CTA = styled.button`
    margin-top: 2rem;
    padding: 0.9rem 1.6rem;
    border-radius: 14px;
    font-size: 1rem;
    font-weight: 700;
    background: ${colors.gradients.primary};
    color: ${colors.text.primary};
    animation: ${pulseRing} 2.4s ease-out 1s infinite;
    ${reducedMotion}

    span { display: inline-block; transition: transform 0.25s ease; }
    &:hover span { transform: translateX(4px); }
`;

/** Wide screens: bubble beside the avatar. Phones: bubble below it (grows downward, avatar stays put). */
const SIDE = '@media (min-width: 900px)';

export const Stage = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.9rem;
    ${enter(300)}

    ${SIDE} {
        flex-direction: row;
        justify-content: center;
        gap: 2.5rem;
    }
`;

export const CharacterButton = styled.button<{ $talking: boolean }>`
    background: none;
    padding: 0;
    border-radius: 50%;
    flex-shrink: 0;
    width: min(100%, 400px, 52vh);
    animation: ${float} 6s ease-in-out infinite;
    ${reducedMotion}

    &:hover { transform: none; box-shadow: none; }

    img {
        display: block;
        width: 100%;
        height: auto;
        transform-origin: 50% 85%;
        animation: ${(p) => (p.$talking ? css`${talk} 0.32s ease-in-out infinite` : 'none')};
        ${reducedMotion}
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: min(80%, 320px);
    }
`;

export const Bubble = styled.div`
    position: relative;
    width: min(100%, 420px);
    padding: 1rem 1.1rem;
    border-radius: 18px;
    text-align: left;
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(139, 92, 246, 0.45);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(6, 182, 212, 0.08) inset;
    backdrop-filter: blur(8px);
    animation: ${pop} 0.35s cubic-bezier(0.22, 1, 0.36, 1);
    ${reducedMotion}

    /* tail: points up to the avatar (phones) or left to it (wide screens) */
    &::after {
        content: '';
        position: absolute;
        top: -9px;
        left: 50%;
        width: 16px;
        height: 16px;
        background: rgba(15, 23, 42, 0.95);
        border-left: 1px solid rgba(139, 92, 246, 0.45);
        border-top: 1px solid rgba(139, 92, 246, 0.45);
        transform: translateX(-50%) rotate(45deg);
    }

    ${SIDE} {
        flex-shrink: 0;
        width: 420px;
        margin-bottom: 5rem; /* lift the tail to the avatar's face */

        &::after {
            top: 50%;
            left: -9px;
            border-top: none;
            border-bottom: 1px solid rgba(139, 92, 246, 0.45);
            transform: translateY(-50%) rotate(45deg);
        }
    }
`;

export const BubbleText = styled.p`
    margin: 0;
    min-height: 3.2em;
    font-size: 0.98rem;
    line-height: 1.55;
    color: ${colors.text.primary};
    cursor: pointer;
`;

export const BubbleStep = styled.div`
    margin-top: 0.4rem;
    font-size: 0.75rem;
    color: ${colors.text.muted};
`;

export const Options = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.85rem;
`;

export const Option = styled.button<{ $index?: number; $ghost?: boolean }>`
    opacity: 0;
    animation: ${pop} 0.35s ease forwards;
    animation-delay: ${(p) => (p.$index ?? 0) * 70}ms;
    padding: 0.45rem 0.8rem;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 600;
    color: ${colors.text.primary};
    background: ${(p) => (p.$ghost ? 'transparent' : 'rgba(139, 92, 246, 0.18)')};
    border: 1px solid ${(p) => (p.$ghost ? colors.borderLight : 'rgba(139, 92, 246, 0.5)')};

    &:hover {
        background: ${colors.gradients.primary};
        border-color: transparent;
        transform: translateY(-2px);
        box-shadow: 0 8px 18px rgba(139, 92, 246, 0.3);
    }

    @media (prefers-reduced-motion: reduce) {
        opacity: 1;
        animation: none;
    }
`;
