import gql from 'graphql-tag'

const CATEGORIES_QUERY = gql`
    query CATEGORIES_QUERY {
        categories {
            id
            label
        }
    }
`

export default CATEGORIES_QUERY