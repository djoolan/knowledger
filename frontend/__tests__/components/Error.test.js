import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import Error from '../../components/Error'
import { ThemeProvider } from 'styled-components'
import theme from '../../components/styles/Theme'

describe('Header', () => {
    it('should render without throwing an error', function () {
        TestRenderer.create(
            <ThemeProvider theme={theme}>
                <Error 
                    error={{
                        message: 'Error message',
                        networkError: {
                            result: {
                                errors: [
                                    { message: 'Network error #1' },
                                ],
                            },
                        },
                    }}
                />
                <Error />
                <Error error={{message: 'Error'}} />

            </ThemeProvider>
        )
    })
})