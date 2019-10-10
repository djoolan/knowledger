import styled from 'styled-components'

const StyledInputField = styled.input`
    padding: 8px 10px;
    font-size: 18px;
    line-height: 22px;
    border: 1px solid #ccc;
    border-radius: 4px;
    &:focus {
        outline: 2;
        border-color: black;
    }
`
export default StyledInputField