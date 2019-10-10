import gql from 'graphql-tag'

const ARTICLES_QUERY = gql`
    query ARTICLES_QUERY {
        articles {
            id
            title
            uri
            summary
            takeaway
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

export default ARTICLES_QUERY