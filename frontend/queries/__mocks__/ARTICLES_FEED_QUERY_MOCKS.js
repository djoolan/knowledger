import moment from 'moment'
import ARTICLES_FEED_QUERY from '../ARTICLES_FEED_QUERY'

const articleFactory = (params) => ({
    id: 1, 
    title: 'Title',
    uri: 'http://www.google.com',
    summary: 'Summary',
    source: 'Source',
    author: 'Author',
    isRead: true,
    takeaway: '',
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
    ...params,
})

const articles = [
    articleFactory({ id: 1, createdAt: moment().toDate() }),
    articleFactory({ id: 2, createdAt: moment().add(-40, 'seconds').toDate() }),
    articleFactory({ id: 3, createdAt: moment().add(-10, 'minutes').toDate() }),
    articleFactory({ id: 4, createdAt: moment().add(-10, 'hours').toDate() }),
    articleFactory({ id: 5, createdAt: moment().add(-10, 'days').toDate() }),
    articleFactory({ id: 6, createdAt: moment().add(-2, 'months').toDate() }),
    articleFactory({ id: 7, createdAt: moment().add(-2, 'years').toDate() }),
    articleFactory({ id: 8, createdAt: moment().add(-2, 'years').toDate() }),
    articleFactory({ id: 9, createdAt: moment().add(-2, 'years').toDate() }),
    articleFactory({ id: 10, createdAt: moment().add(-2, 'years').toDate() }),
    articleFactory({ id: 11, createdAt: moment().add(-2, 'years').toDate() }),
    articleFactory({ id: 12, createdAt: moment().add(-2, 'years').toDate() }),
    articleFactory({ id: 13, createdAt: moment().add(-2, 'years').toDate() }),
]

export const ARTICLES_FEED_QUERY_MOCK = variables => ({
    request: {
        query: ARTICLES_FEED_QUERY,
        variables
    },
    result: {
        data: {
            articlesFeed: {
                count: articles.length,
                articles: articles,
            }
        },
    },
})

export const ARTICLES_FEED_QUERY_MOCK_ERROR = variables => ({
    ...ARTICLES_FEED_QUERY_MOCK(variables),
    result: {
        error: {
            errors: [{ message: "Mock error" }]
        }
    },
})

export const ARTICLES_FEED_QUERY_MOCK_NODATA = variables => ({
    ...ARTICLES_FEED_QUERY_MOCK(variables),
    result: {
        data: {
            articles: [],
        },
    },
})