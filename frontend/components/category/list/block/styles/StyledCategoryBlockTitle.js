import styled from 'styled-components'

const StyledCategoryBlockTitle = styled.div`
    text-align: left;
    a {
        color: ${props => props.theme.primary};
        font-size: 26px;
        font-weight: 700;
        line-height: 0.8;
    }
`

export default StyledCategoryBlockTitle