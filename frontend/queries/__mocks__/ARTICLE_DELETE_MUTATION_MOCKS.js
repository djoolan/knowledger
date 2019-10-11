import { ARTICLE } from './ARTICLE_MOCKS' 
import ARTICLE_DELETE_MUTATION from '../ARTICLE_DELETE_MUTATION'

export const ARTICLE_DELETE_MUTATION_MOCK = (variables = {}) => ({
    request: {
        query: ARTICLE_DELETE_MUTATION,
        variables: {
            id: ARTICLE.id,
            ...variables,
        },
    },
    result: {
        data: {
            deleteArticle: {
                id: ARTICLE.id,
                ...variables,
            },
        },
    },
})

export const ARTICLE_DELETE_MUTATION_MOCK_ERROR = variables => ({
    ...ARTICLE_DELETE_MUTATION_MOCK(variables),
    result: {
        error: {
            errors: [{ message: "Mock error" }]
        }
    },
})