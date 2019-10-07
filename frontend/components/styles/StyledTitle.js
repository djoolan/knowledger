import styled from 'styled-components'

const StyledTitle = styled.div`
    font-size: 32px;
    margin-left: 1.5rem;
    position: relative;
    a {
        padding: 0.3rem 0.6rem;
        color: ${props => props.theme.primary };
        /* text-transform: uppercase; */
        text-decoration: none;
    }
    @media (max-width: ${props => props.theme.maxWidth }) {
        text-align: center;
        margin: 0;
    }
`

export default StyledTitle