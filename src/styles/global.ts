import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    ::root {
        --background: #f0f2f5
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-widht: 1080px) {
            font-size: 93.75%
        }

        @media (max-widht: 720px) {
            font-size: 87.5%
        }
    }

    body {
        background: var(---background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
