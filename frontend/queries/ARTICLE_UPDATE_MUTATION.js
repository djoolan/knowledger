import gql from 'graphql-tag'

const articleUpdatableFields = gql`{
    title
    uri
    summary
    takeaway
    source
    author
    tags
    categories
    image
    createdAt
    updatedAt
}`

const ARTICLE_UPDATE_MUTATION = gql`
    mutation ARTICLE_UPDATE_MUTATION(
        $id: ID!
        $title: String!
        $uri: String
        $summary: String
        $takeaway: String
        $source: String
        $author: String
        $tags: String
        $categories: String
        $isRead: Boolean
    ) {
        updateArticle(
            id:$id
            title: $title
            uri: $uri
            summary: $summary
            takeaway: $takeaway
            source: $source
            author: $author
            tags: $tags
            categories: $categories
            isRead: $isRead
        )
         {
            id
            title
            uri
            summary
            takeaway
            source
            author
            isRead
            tags {
                id
                label
            }
            categories {
                id
                label
            }
        }
    }
`

export default ARTICLE_UPDATE_MUTATION