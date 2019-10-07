import gql from 'graphql-tag'

const TAG_QUERY = gql`
    query TAG_QUERY(
        $id: ID!
    ) {
        tag(id: $id) {
            id
            label
        }
    }
`

export default TAG_QUERY