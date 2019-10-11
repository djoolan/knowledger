import { ARTICLE } from './ARTICLE_MOCKS' 
import ARTICLE_QUERY from '../ARTICLE_QUERY'

export const ARTICLE_QUERY_MOCK = variables => ({
    request: {
        query: ARTICLE_QUERY,
        variables,
    },
    result: {
        data: {
            article: {
                ...ARTICLE,
                image: '',
                createdAt: '',
                updatedAt: '',
            },
        },
    },
})

export const ARTICLE_QUERY_MOCK_ERROR = variables => ({
    ...ARTICLE_QUERY_MOCK(variables),
    result: {
        error: {
            errors: [{ message: "Mock error" }]
        }
    },
})

export const ARTICLE_QUERY_MOCK_NODATA = variables => ({
    ...ARTICLE_QUERY_MOCK(variables),
    result: {
        data: {
            article: { id: null },
        },
    },
})