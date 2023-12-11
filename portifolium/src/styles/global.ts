import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['secundary-blue']};
    }

    body {
        background-color: ${props => props.theme['background-blue']};
        color: ${props => props.theme['secundary-blue']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 400 1rem Raleway, sans-serif;
    }
`;