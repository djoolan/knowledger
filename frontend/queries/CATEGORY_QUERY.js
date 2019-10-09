import gql from 'graphql-tag'

const CATEGORY_QUERY = gql`
    query CATEGORY_QUERY(
        $id: ID!
    ) {
        category(id: $id) {
            id
            label
        }
    }
`

export default CATEGORY_QUERY