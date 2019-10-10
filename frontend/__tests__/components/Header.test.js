import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import Header from '../../components/Header'
import { ThemeProvider } from 'styled-components'
import theme from '../../components/styles/Theme'

describe('Header', () => {
    it('should render without throwing an error', function () {
        TestRenderer.create(
            <ThemeProvider theme={theme}>
                <Header
                />
            </ThemeProvider>
        )
    })
})