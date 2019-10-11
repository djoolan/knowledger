import { 
    ARTICLE, 
    ARTICLE_INPUT, 
    ARTICLE_OUTPUT,
} from './ARTICLE_MOCKS' 
import ARTICLE_UPDATE_MUTATION from '../ARTICLE_UPDATE_MUTATION'

export const ARTICLE_UPDATE_MUTATION_MOCK = variables => ({
    request: {
        query: ARTICLE_UPDATE_MUTATION,
        variables: {
            ...ARTICLE_INPUT(),
            ...variables,
        },
    },
    result: {
        data: {
            updateArticle: {
                ...ARTICLE_OUTPUT(),
                ...variables,
            },
        },
    },
})

export const ARTICLE_UPDATE_MUTATION_MOCK_ERROR = variables => ({
    ...ARTICLE_UPDATE_MUTATION_MOCK(variables),
    result: {
        error: {
            errors: [{ message: "Mock error" }]
        }
    },
})

export const ARTICLE_UPDATE_MUTATION_MOCK_NODATA = variables => ({
    ...ARTICLE_UPDATE_MUTATION_MOCK(variables),
    result: {
        data: {
            article: null,
        },
    },
})