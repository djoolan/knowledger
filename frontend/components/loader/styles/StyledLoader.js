import styled from 'styled-components'

const StyledLoader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 100%;
    position: relative;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -300px;
    display: flex;
    font-size: 32px;
    font-weight: 300;
    line-height: 1.3;
    color: ${props => props.theme.primary};
    font-family: Arial, Helvetica, sans-serif;
`

export default StyledLoader