import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import Meta from '../../components/Meta'
import { ThemeProvider } from 'styled-components'
import theme from '../../components/styles/Theme'

describe('Meta', () => {
    it('should render without throwing an error', function () {
        TestRenderer.create(
            <ThemeProvider theme={theme}>
                <Meta
                />
            </ThemeProvider>
        )
    })
})