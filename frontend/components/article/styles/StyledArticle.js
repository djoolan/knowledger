import styled from 'styled-components'

const StyledArticle = styled.li`
    background: #ebebeb;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid #ebebeb;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.08);
    a {
        line-height: 2;
    }
    p {
        font-size: 1.4rem;
        line-height: 2;
        flex-grow: 1;
        padding: 0.1rem 0.3rem;
    }
`
export default StyledArticle