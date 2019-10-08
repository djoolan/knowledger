import styled from 'styled-components'

const StyledArticleForm = styled.form`
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
    fieldset, div[role=group] {
        border: 0;
        margin: 0;
        &[disabled] {
            opacity: 0.3;
        }
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
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
    input {
        border: none;
        border-radius: 0;
        border-bottom: 1px dotted ${props => props.theme.primary};
        padding-left: 0;
        padding-right: 0;
        font-size: 24px;
        &::placeholder {
            color: #eee;
        }
    }
    textarea {
        line-height: 1.3;
    }
    .select {
        input {
            line-height: 1;
        }
    }
    label {
        display: block;
        width: 100%;
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: normal;
        color: ${props => props.theme.primary};
        input {
            margin-top: -6px;
        }
        .select {
            margin-top: 4px;
        }
    }
    .author, .source {
        width: 49%;
    }
    .author {
        margin-right: 2%;
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
    &.delete {
        div[role=group] {
            flex-direction: row-reverse;
        }
        button {
            padding-left: 10px;
            padding-right: 10px;
            background: red;
            width: auto;
        }
    }
    span.free {
        font-size: 1.2rem;
        margin-left: 0;
        font-style: 'italic';
        color: #795548;
    }
`
export default StyledArticleForm