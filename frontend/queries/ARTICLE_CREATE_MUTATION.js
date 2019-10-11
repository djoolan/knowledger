import gql from 'graphql-tag'

const ARTICLE_CREATE_MUTATION = gql`
    mutation ARTICLE_CREATE_MUTATION(
        $title: String!
        $uri: String
        $summary: String
        $source: String
        $author: String
        $isRead: Boolean
        $tags: String
        $categories: String
    ) {
        createArticle(
            title: $title
            uri: $uri
            summary: $summary
            source: $source
            author: $author
            isRead: $isRead,
            tags: $tags
            categories: $categories
        ) {
            id
        }
    }
`

export default ARTICLE_CREATE_MUTATION