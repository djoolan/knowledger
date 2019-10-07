import gql from 'graphql-tag'

const TAGS_QUERY = gql`
    query TAGS_QUERY {
        tags {
            id
            label
        }
    }
`

export default TAGS_QUERY