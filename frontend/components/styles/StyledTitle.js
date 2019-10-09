import styled from 'styled-components'

const StyledTitle = styled.div`
    font-size: 32px;
    margin-left: 1.5rem;
    position: relative;
    a {
        padding: 0.3rem 0.6rem;
        /* color: ${props => props.theme.primary }; */
        /* text-transform: uppercase; */
        text-decoration: none;
        font-weight: 300;
        color: ${props => props.theme.primary};
        color: black;
        span.stabilo {
            font-weight: 800;
            position: relative;
            background: rgba(161, 248, 251, .5);
            background: transparent;
            color: white;
            /* text-shadow: -2px 2px 0px black; */
            color: black;
            /* text-shadow: -2px 2px 0px white; */
            &:before {
                content: '';
                background: ${props => props.theme.primary};
                /* background-image: linear-gradient(to right,#fce3ec,#ffe8cc);
                background-position: 0 0;
                background-repeat: repeat-x;
                background-size: 100% 100%; */
                position: absolute;
                z-index: -1;
                width: 100%;
                height: 100%;
                opacity: 1;
                top: 0;
                left: 0;
                transform: rotate(-5deg) skew(-5deg);
            }
            /* &:before{
            } */
        }
    }
    @media (max-width: ${props => props.theme.maxWidth }) {
        text-align: center;
        margin: 0;
    }
`

export default StyledTitle