import TAGS_QUERY from '../TAGS_QUERY'

export const TAGS_QUERY_MOCK = {
    request: {
        query: TAGS_QUERY,
    },
    result: {
        data: {
            tags: [
                { id: '1', label: 'JavaScript' },
            ],
        },
    },
}

export const TAGS_QUERY_MOCK_ERROR = {
    ...TAGS_QUERY_MOCK,
    result: {
        error: {
            errors: [{ message: "Mock error" }]
        }
    },
}

export const TAGS_QUERY_MOCK_NODATA = {
    ...TAGS_QUERY_MOCK,
    result: {
        data: {
            tags: [],
        },
    },
}