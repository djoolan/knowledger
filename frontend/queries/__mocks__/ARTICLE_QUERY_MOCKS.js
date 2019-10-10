import ARTICLE_QUERY from '../ARTICLE_QUERY'

export const ARTICLE_QUERY_MOCK = variables => ({
    request: {
        query: ARTICLE_QUERY,
        variables,
    },
    result: {
        data: {
            article: {
                id: 1, 
                title: 'Title',
                uri: 'http://www.google.com',
                summary: 'Summary',
                source: 'Source',
                author: 'Author',
                isRead: true,
                image: '',
                createdAt: '',
                updatedAt: '',
                tags: [
                    {
                        id: 1,
                        label: 'Tag'
                    },
                ],
                categories: [
                    {
                        id: 1,
                        label: 'Category',
                    },
                ],
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
            article: null,
        },
    },
})