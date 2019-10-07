import styled from 'styled-components'

const StyledNavbar = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    font-size: 18px;
    justify-self: end;
    button, a {
        display: flex;
        align-items: center;
        position: relative;
        background: none;
        border: 0;
        cursor: pointer;
        padding: 1rem 3rem;
        /* text-transform: uppercase; */
        font-weight: bold;
        font-size: 18px;
        /* &:before {
            content: "";
            position: absolute;
            transform: skew(-20deg);
            top: 0;
            bottom: 0;
            width: 2px;
            left: 0;
            background-color: lightgray;
            height: 100%;
        } */
        &:after {
            content: "";
            height: 2px;
            background: ${props => props.theme.primary};
            width: 0;
            position: absolute;
            transform: translate(-50%);
            transition: width 0.4s;
            transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
            left: 50%;
            margin-top: 2rem;
        }
        &:hover, &:focus {
            outline: none;
            &:after {
                width: calc(100% - 60px);
            }
        }
    }
`

export default StyledNavbar