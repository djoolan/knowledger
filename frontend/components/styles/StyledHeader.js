import styled from 'styled-components'

const StyledHeader = styled.header`
    .navbar {
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: center;
        background: white;
        position: fixed;
        padding: 0 20px;
        z-index: 2;
        width: 100%;
        height: 80px;
        box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.08);
    }
    .sub-navbar {
        display: grid;
        grid-template-columns: auto 1fr;
        border-bottom: 1px solid lightgray;
    }
`
export default StyledHeader