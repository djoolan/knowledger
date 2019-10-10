import styled from 'styled-components'

const StyledArticlesFilter = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* background: red; */
    height: 50px;
    margin-bottom: 10px;
    & > * {
        margin-right: 20px;
        &:last-child {
            margin-right: 0;
        }
    }
    .select {
        text-align: left;
        width: 200px;
        /* height: 20px; */
    }
    button[type="submit"] {
        background-image: linear-gradient(to right,#fce3ec,#ffe8cc);
        background-image: linear-gradient(to right,#b4fdff,#b4ffd7);
        background-image: linear-gradient(to right,#5bced1,#63d397);
        color: white;
        font-size: 18px;
        font-weight: bold;
        border: 0;
        border-radius: 2px;
        padding: 10px 20px;
        text-align: center;
        &:hover {
            opacity: 0.7;
        }
    }
`
export default StyledArticlesFilter