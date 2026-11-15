import styled from 'styled-components';
import { colors, breakpoints } from '../../styles/theme';

export const AboutContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem 1rem;
`;

export const TagAboutMe = styled.div`
    display: inline-block;
    padding: 0.35rem 0.9rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.9rem;
    background: rgba(139, 92, 246, 0.15);
    border: 1px solid rgba(139, 92, 246, 0.35);
`;

export const Name = styled.h2`
    margin: 0.8rem 0 2rem;
    font-size: clamp(2rem, 4vw, 2.8rem);
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;

    @media (max-width: ${breakpoints.desktop}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`;

export const Card = styled.div`
    height: 100%;
    padding: 1.4rem;
    border-radius: 16px;
    background: ${colors.gradients.card};
    border: 1px solid ${colors.borderLight};
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-6px);
        border-color: rgba(139, 92, 246, 0.5);
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
    }

    span {
        display: inline-grid;
        place-items: center;
        width: 46px;
        height: 46px;
        margin-bottom: 0.9rem;
        border-radius: 12px;
        font-size: 1.5rem;
        background: rgba(15, 23, 42, 0.6);
        transition: transform 0.3s ease;
    }
    &:hover span { transform: rotate(-8deg) scale(1.1); }

    p {
        margin: 0;
        color: ${colors.text.secondary};
        line-height: 1.6;
    }
`;
