import gql from 'graphql-tag'

const ARTICLE_CREATE_MUTATION = gql`
    mutation ARTICLE_CREATE_MUTATION(
        $title: String!
        $uri: String
        $summary: String
        $takeaway: String
        $source: String
        $author: String
        $tags: String
        $categories: String
        $image: String
    ) {
        createArticle(
            title: $title
            uri: $uri
            summary: $summary
            takeaway: $takeaway
            source: $source
            author: $author
            tags: $tags
            categories: $categories
            image: $image
        ) {
            id
        }
    }
`

export default ARTICLE_CREATE_MUTATION