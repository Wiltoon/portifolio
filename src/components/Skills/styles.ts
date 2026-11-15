import styled from 'styled-components';
import { colors, breakpoints } from '../../styles/theme';

export const SkillsExpContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const Tag = styled.div`
    display: inline-block;
    padding: 0.35rem 0.9rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.9rem;
    background: rgba(139, 92, 246, 0.15);
    border: 1px solid rgba(139, 92, 246, 0.35);
`;

export const TitleSkills = styled.h2`
    margin: 0.8rem 0 0.4rem;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
`;

export const SubTitleSkills = styled.p`
    margin: 0 0 2.25rem;
    color: ${colors.text.muted};
`;

export const Groups = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    text-align: left;
    margin-bottom: 2.5rem;

    @media (max-width: ${breakpoints.desktop}) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: ${breakpoints.tablet})  { grid-template-columns: 1fr; }
`;

export const Group = styled.div<{ $accent: string }>`
    height: 100%;
    padding: 1.25rem 1.3rem;
    border-radius: 16px;
    background: ${colors.gradients.card};
    border: 1px solid ${colors.borderLight};
    border-top: 3px solid ${(p) => p.$accent};
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
    }

    h3 {
        margin: 0 0 0.9rem;
        font-size: 1.05rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`;

export const Chips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
`;

export const Chip = styled.span<{ $accent: string; $strong?: boolean }>`
    padding: 0.3rem 0.7rem;
    border-radius: 999px;
    font-size: 0.82rem;
    font-weight: ${(p) => (p.$strong ? 700 : 500)};
    color: ${(p) => (p.$strong ? colors.text.primary : colors.text.secondary)};
    background: ${(p) => (p.$strong ? `${p.$accent}2e` : 'rgba(15, 23, 42, 0.55)')};
    border: 1px solid ${(p) => (p.$strong ? `${p.$accent}88` : colors.borderLight)};
    transition: transform 0.2s ease, border-color 0.2s ease;

    &:hover {
        transform: translateY(-2px) scale(1.04);
        border-color: ${(p) => p.$accent};
    }
`;

export const LegendNote = styled.p`
    margin: -1.5rem 0 2rem;
    font-size: 0.8rem;
    color: ${colors.text.muted};
`;
