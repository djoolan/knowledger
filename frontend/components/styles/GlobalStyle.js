import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Rokkitt';
        font-weight: normal;
        font-style: normal;
    }
    html {
        font-family: 'Rokkitt';
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 18px;
        line-height: 1.5;
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.text}
    }
    span.stabilo {
        background: ${props => props.theme.primary};
    }
` 

export default GlobalStyle