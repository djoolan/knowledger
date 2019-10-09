import styled from 'styled-components'

const StyledArticlesContainer = styled.div`
    text-align: center;
    p.count {
        font-size: 16px;
        /* font-style: italic; */
    }
    .nav {
        width: 600px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        justify-content: center;
        align-items: center;
        .pager {
            width: 10px;
            height: 28px;
            color: ${props => props.theme.primary};
            pointer-events: auto;
            &.prev {
                margin-right: 10px;
            }
            &.next {
                margin-left: 10px;
            }
        }
    }
`
export default StyledArticlesContainer