import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    
    *, ::after, ::before {
        box-sizing: inherit;
    }
    
    body { 
        transition: background-color 0.3s;
        background-color: ${({ theme }) => theme.colors.site.background};
        color: ${({ theme }) => theme.colors.site.text};
        font-family: 'Inter', sans-serif;
        word-break: break-word;
        font-size: 18px;
        padding-bottom: 108px;
        overflow-y: scroll;
        letter-spacing: 0.05em;       

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding-bottom: 32px;
        }
    } 
`;