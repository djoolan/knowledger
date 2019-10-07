import styled from 'styled-components'

const StyledButton = styled.button`
    background: #f00;
    font-size: ${props => props.large? '20px': '12px'};
    font-weight: normal;
    color: black;
    span {
        color: white;
    }
`

export default StyledButton