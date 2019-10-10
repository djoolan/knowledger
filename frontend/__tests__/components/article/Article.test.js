import * as React from 'react'
import TestRenderer, { act } from 'react-test-renderer'
import { MockedProvider } from '@apollo/react-testing'
import { ThemeProvider } from 'styled-components'
import theme from '../../../components/styles/Theme'
import wait from 'waait'
import { ArticleComponent, articleComponentFactory } from '../../../components/article/Article'
import { 
    ARTICLE_QUERY_MOCK, 
    ARTICLE_QUERY_MOCK_ERROR, 
    ARTICLE_QUERY_MOCK_NODATA,
} from '../../../queries/__mocks__/ARTICLE_QUERY_MOCKS'

const createComponent = ({ mocks, query }) => {
    return TestRenderer.create(
        <ThemeProvider theme={theme}>
            <MockedProvider mocks={mocks} addTypename={false}>
                <ArticleComponent router={{query}}/>
            </MockedProvider>
        </ThemeProvider>
    )
}

describe('Article', () => {
    it('should render without throwing an error', async () => {
        await act(async () => {
            createComponent({ mocks: [ARTICLE_QUERY_MOCK], query: { id: 'create' } })
        })
    })
})