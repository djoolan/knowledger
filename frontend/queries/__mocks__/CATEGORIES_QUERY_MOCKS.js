import CATEGORIES_QUERY from '../CATEGORIES_QUERY'

export const CATEGORIES_QUERY_MOCK = {
    request: {
        query: CATEGORIES_QUERY,
    },
    result: {
        data: {
        categories: [
            { id: '1', label: 'Programming' },
        ],
        },
    },
}

export const CATEGORIES_QUERY_MOCK_ERROR = {
    ...CATEGORIES_QUERY_MOCK,
    result: {
        error: {
            errors: [{ message: "Mock error" }]
        }
    },
}

export const CATEGORIES_QUERY_MOCK_NODATA = {
    ...CATEGORIES_QUERY_MOCK,
    result: {
        data: {
            categories: [],
        },
    },
}