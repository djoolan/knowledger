import gql from 'graphql-tag'

const ARTICLE_QUERY = gql`
    query ARTICLE_QUERY(
        $id: ID!
    ) {
        article(id: $id) {
            id
            title
            uri
            summary
            source
            author
            image
            isRead
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
    }
`

export default ARTICLE_QUERY