import styled from "styled-components";
import { colors, spacing, typography, shadows, radius, breakpoints } from "../../styles/theme";

export const HeaderContainer = styled.header`
    background: ${colors.cardOverlay};
    padding: ${spacing.sm};
    margin: ${spacing.xl} ${spacing.lg};
    border-radius: ${radius.large};
    border: 1px solid ${colors.borderLight};
    box-shadow: ${shadows.card};
    backdrop-filter: blur(10px);

    @media (max-width: ${breakpoints.tablet}) {
        margin: ${spacing.lg} ${spacing.md};
    }

    @media (max-width: ${breakpoints.mobile}) {
        margin: ${spacing.md} ${spacing.sm};
    }
`;

export const HeaderLink = styled.a`
    color: inherit;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
        color: ${colors.primary};
    }
`;

export const HeaderContent = styled.div`
    border-radius: ${radius.medium};
    width: 100%;
    margin: 0 auto;
    padding: 0 ${spacing.md};

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 0 ${spacing.sm};
        flex-direction: column;
        gap: ${spacing.md};
    }
`;

export const HeaderMenu = styled.div`
    font-family: ${typography.fontFamily.primary};
    font-size: ${typography.fontSize.sm};
    display: flex;
    color: ${colors.text.primary};
    gap: ${spacing.md};

    @media (max-width: ${breakpoints.tablet}) {
        font-size: ${typography.fontSize.xs};
        gap: ${spacing.sm};
    }

    @media (max-width: ${breakpoints.mobile}) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const HeaderItem = styled.div`
    padding: ${spacing.sm} ${spacing.md};
    border-radius: ${radius.small};
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        color: ${colors.primary};
        background: ${colors.cardOverlay};
        transform: translateY(-2px);
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding: ${spacing.xs} ${spacing.sm};
    }
`;

export const LanguageButtons = styled.div`
    gap: ${spacing.sm};
    display: flex;
`;

export const BrenButton = styled.button`
    width: 40px;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
    background: ${colors.gradients.primary};
    color: ${colors.text.primary};
    border-radius: ${radius.medium};
    border: 1px solid ${colors.borderLight};
    font-size: ${typography.fontSize.xs};
    font-weight: ${typography.fontWeight.bold};
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: ${shadows.small};

    &:hover {
        background: ${colors.gradients.hover};
        transform: translateY(-2px);
        box-shadow: ${shadows.medium};
    }

    &:active {
        transform: translateY(0);
    }
`;