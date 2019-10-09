import styled from 'styled-components'

const StyledArticlesContainer = styled.div`
    text-align: center;
    p.count {
        font-size: 16px;
        font-style: italic;
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
            width: 30px;
            margin-top: 4px;
            line-height: 2;
            /* border-radius: 4px; */
            /* border: 1px solid ${props => props.theme.primary}; */
            color: ${props => props.theme.primary};
            /* font-weight: bold; */
            /* font-size: 18px; */
            /* padding: 2px 8px; */
            pointer-events: auto;
            .prev {
                margin-right: 10px;
            }
            .next {
                margin-left: 10px;
            }
        }
    }
`
export default StyledArticlesContainer