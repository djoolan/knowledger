import styled from 'styled-components'

const StyledArticlesFilter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* background: red; */
    height: 50px;
    margin-bottom: 10px;
    .select {
        text-align: left;
        width: 200px;
        /* height: 20px; */
        margin-right: 20px;
        &:last-child {
            margin-right: 0;
        }
    }
`
export default StyledArticlesFilter