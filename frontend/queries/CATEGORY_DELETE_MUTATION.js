import gql from 'graphql-tag'

const CATEGORY_DELETE_MUTATION = gql`
    mutation CATEGORY_DELETE_MUTATION($id: ID!) {
        deleteCategory(id:$id) {
            id
        }
    }
`

export default CATEGORY_DELETE_MUTATION