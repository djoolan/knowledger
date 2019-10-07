import { Component }  from 'react'
import Header from './Header'
import Meta from './Meta'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from './styles/Theme'
import StyledPage from './styles/StyledPage'
import StyledPageContent from './styles/StyledPageContent'
import StyledButton from './styles/StyledButton'

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />
                    <StyledPageContent>
                        { this.props.children }
                    </StyledPageContent>
                </StyledPage>
            </ThemeProvider>
        )
    }
}

export default Page