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
            createdAt
            updatedAt
            tags {
                id
                label
            }
        }
    }
`

export default ARTICLE_QUERY