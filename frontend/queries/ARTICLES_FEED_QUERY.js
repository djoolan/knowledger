import gql from 'graphql-tag'

const ARTICLES_FEED_QUERY = gql`
    query ARTICLES_FEED_QUERY($first: Int, $skip: Int, $orderBy: ArticleOrderByInput) {
        articlesFeed(first: $first, skip: $skip, orderBy: $orderBy) {
            articles {
                id
                title
                uri
                summary
                takeaway
                source
                author
                image
                createdAt
                updatedAt
                tags {
                    id
                    label
                }
                categories {
                    id
                    label
                }
            }
            count
        }
    }
`

export default ARTICLES_FEED_QUERY