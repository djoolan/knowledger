import styled from 'styled-components'

const StyledArticleBlockTitle = styled.div`
    text-align: left;
    a {
        color: ${props => props.theme.primary};
        font-size: 22px;
        font-weight: 700;
        line-height: 1.1;
        color: black;
        /* text-decoration: underline; */
        /* background: ${props => props.theme.primary};
        background-size: 20% 20%;
        background-repeat: no-repeat; */
        background-image: linear-gradient(
            to bottom, 
            transparent 50%, 
            ${props => props.theme.primary} 50%, 
            ${props => props.theme.primary}
        );
        background-image: linear-gradient(
            to right, 
            ${props => props.theme.primary},
            red
        );
        background-image: linear-gradient(to right,#fce3ec,#ffe8cc);
        background-image: linear-gradient(to right,#b4fdff,#b4ffd7);
        background-position: 0 12px;
        background-repeat: repeat-x;
        background-size: 100% 12px;
}
`

export default StyledArticleBlockTitle