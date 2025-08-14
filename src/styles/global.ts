import { createGlobalStyle } from "styled-components";
import { colors, typography, shadows } from "./theme";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${colors.primary};
    }

    body {
        background: ${colors.background.gradient};
        color: ${colors.text.primary};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        min-height: 100vh;
    }

    body, input, textarea, button {
        font-family: ${typography.fontFamily.primary};
        font-size: ${typography.fontSize.base};
        line-height: 1.6;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${typography.fontFamily.primary};
        font-weight: ${typography.fontWeight.semibold};
        color: ${colors.text.primary};
        margin-bottom: 1rem;
    }

    h1 {
        font-size: ${typography.fontSize['5xl']};
        background: ${colors.gradients.primary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    h2 {
        font-size: ${typography.fontSize['4xl']};
    }

    h3 {
        font-size: ${typography.fontSize['3xl']};
    }

    p {
        color: ${colors.text.secondary};
        margin-bottom: 1rem;
    }

    a {
        color: ${colors.primary};
        text-decoration: none;
        transition: all 0.3s ease;
        
        &:hover {
            color: ${colors.accent};
            text-shadow: ${shadows.glow};
        }
    }

    button {
        cursor: pointer;
        border: none;
        background: ${colors.gradients.primary};
        color: ${colors.text.primary};
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        font-weight: ${typography.fontWeight.medium};
        transition: all 0.3s ease;
        
        &:hover {
            transform: translateY(-2px);
            box-shadow: ${shadows.hover};
        }
        
        &:active {
            transform: translateY(0);
        }
    }

    input, textarea {
        background: ${colors.background.card};
        border: 1px solid ${colors.borderLight};
        color: ${colors.text.primary};
        padding: 0.75rem;
        border-radius: 8px;
        transition: all 0.3s ease;
        
        &:focus {
            border-color: ${colors.primary};
            box-shadow: 0 0 0 3px ${colors.primary}33;
        }
        
        &::placeholder {
            color: ${colors.text.muted};
        }
    }

    /* Scrollbar personalizada */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: ${colors.background.secondary};
    }

    ::-webkit-scrollbar-thumb {
        background: ${colors.gradients.primary};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${colors.gradients.secondary};
    }

    /* Seleção de texto */
    ::selection {
        background: ${colors.primary}33;
        color: ${colors.text.primary};
    }
`;