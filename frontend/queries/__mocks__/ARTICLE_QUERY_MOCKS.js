import ARTICLE_QUERY from '../ARTICLE_QUERY'

export const ARTICLE_QUERY_MOCK = {
    request: {
        query: ARTICLE_QUERY,
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
}

export const ARTICLE_QUERY_MOCK_ERROR = {
    ...ARTICLE_QUERY_MOCK,
    result: {
        error: {
            errors: [{ message: "Mock error" }]
        }
    },
}

export const ARTICLE_QUERY_MOCK_NODATA = {
    ...ARTICLE_QUERY_MOCK,
    result: {
        data: {
            article: null,
        },
    },
}