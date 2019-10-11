import { 
    ARTICLE, 
    ARTICLE_INPUT, 
    ARTICLE_CREATE_INPUT,
    ARTICLE_OUTPUT,
} from './ARTICLE_MOCKS' 
import ARTICLE_CREATE_MUTATION from '../ARTICLE_CREATE_MUTATION'

export const ARTICLE_CREATE_MUTATION_MOCK = variables => ({
    request: {
        query: ARTICLE_CREATE_MUTATION,
        variables: {
            ...ARTICLE_CREATE_INPUT(),
            ...variables,
        },
    },
    result: {
        data: {
            createArticle: {
                ...ARTICLE_OUTPUT(),
                ...variables,
            },
        },
    },
})

export const ARTICLE_CREATE_MUTATION_MOCK_ERROR = variables => ({
    ...ARTICLE_CREATE_MUTATION_MOCK(variables),
    result: {
        error: {
            errors: [{ message: "Mock error" }]
        }
    },
})

export const ARTICLE_CREATE_MUTATION_MOCK_NODATA = variables => ({
    ...ARTICLE_CREATE_MUTATION_MOCK(variables),
    result: {
        data: {
            article: null,
        },
    },
})