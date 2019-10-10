import READSTATUS_QUERY from '../READSTATUS_QUERY'

export const READSTATUS_QUERY_MOCK = {
    request: {
        query: READSTATUS_QUERY,
    },
    result: {
        data: {
            __type: {
                name: 'ArticleReadStatus',
                enumValues: [
                    {
                        name: 'TODO',
                    },
                    {
                        name: 'PROGRESS',
                    },
                    {
                        name: 'DONE',
                    },
                ],
            },
        },
    },
}