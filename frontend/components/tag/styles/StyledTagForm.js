import styled from 'styled-components'

const StyledTagForm = styled.form`
    /* background: #FFC107; */
    display: flex;
    flex-direction: column;
    position: relative;
    /* border: 5px solid white; */
    /* padding: 0.2rem; */
    width: 600px;
    font-size: 16px;
    line-height: 1.3;
    font-weight: bold;
    margin: 0 auto;
    /* box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.08); */
    fieldset {
        border: 0;
        margin: 0;
        &[disabled] {
            opacity: 0.3;
        }
    }
    input,
    textarea,
    select {
        display: block;
        width: 100%;
        padding: 0.1rem 0.8rem;
        font-size: 1.4rem;
        margin-top: 0.7rem;
        line-height: 2;
        border: 1px solid #eee;
        border-radius: 4px;
        &:focus {
            outline: 2;
            border-color: black;
        }
    }
    textarea {
        line-height: 1.3;
    }
    label {
        display: block;
        width: 100%;
        margin-bottom: 1.3rem;
        font-size: 1.8rem;
    }
    button,
    input[type="submit"] {
        background: ${props => props.theme.primary};
        color: white;
        font-size: 18px;
        font-weight: bold;
        border: 0;
        border-radius: 2px;
        padding: 10px 0;
        text-align: center;
        width: 100%;
        &:hover {
            opacity: 0.7;
        }
    }
    span.free {
        font-size: 1.2rem;
        margin-left: 0;
        font-style: 'italic';
        color: #795548;
    }
`
export default StyledTagForm