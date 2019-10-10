import styled from 'styled-components'

const StyledTags = styled.ul`
    display: grid;
    grid-template-columns: calc((100% - 3 * ${props => props.theme.gridGap}) / 4) calc((100% - 3 * ${props => props.theme.gridGap}) / 4) calc((100% - 3 * ${props => props.theme.gridGap}) / 4) calc((100% - 3 * ${props => props.theme.gridGap}) / 4);
    width: calc(1200px - 2 * ${props => props.theme.pagePadding});
    @media (max-width: 1200px) {
        width: calc(900px - 2 * ${props => props.theme.pagePadding});
        grid-template-columns: calc((100% - 2 * ${props => props.theme.gridGap}) / 3) calc((100% - 2 * ${props => props.theme.gridGap}) / 3) calc((100% - 2 * ${props => props.theme.gridGap}) / 3);
    }
    @media (max-width: 900px) {
        width: calc(600px - 2 * ${props => props.theme.pagePadding});
        grid-template-columns: calc((100% - 1 * ${props => props.theme.gridGap}) / 2) calc((100% - 1 * ${props => props.theme.gridGap}) / 2);
    }
    grid-gap: ${props => props.theme.gridGap};
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 0;
    li {
        list-style: none;
    }
`
export default StyledTags