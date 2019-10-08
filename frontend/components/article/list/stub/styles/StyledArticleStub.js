import styled from 'styled-components'

const StyledArticleStub = styled.li`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    /* border: 1px solid #ebebeb; */
    box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    a.directLink {
        font-size: 12px;
        line-height: 1.3;
        margin-bottom: 20px;
    }
    p {
        text-align: left;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        /* white-space: nowrap; */
        width: 100%;
        overflow: hidden;
        font-size: 14px;
        line-height: 1.3;
        /* flex-grow: 1; */
        margin: 0;
    }
    .tag {
        font-size: 8px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        line-height: 1.3;
        padding: 2px 4px;
        border-radius: 2px;
        background: #fff;
        color: #999;
        border: 1px solid #999;
        margin-right: 2px;
    }
    .actionButtons {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-gap: 1px;
        width: 100%;
        & > * {
            background-color: ${props => props.theme.primary};
            color: white;
            padding: 1rem;
            width: 90%;
            margin: 0.3rem auto 1rem;
            font-size: 1.2rem;
            border: 0;
        }
    }
`
export default StyledArticleStub