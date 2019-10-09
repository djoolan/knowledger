import gql from 'graphql-tag'

const ARTICLES_FEED_QUERY = gql`
    query ARTICLES_FEED_QUERY(
        $search: String, 
        $tags: String, 
        $categories: String, 
        $first: Int, 
        $skip: Int, 
        $orderBy: ArticleOrderByInput
    ) {
        articlesFeed(
            search: $search, 
            tags: $tags, 
            categories: $categories, 
            first: $first, 
            skip: $skip, 
            orderBy: $orderBy
        ) {
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