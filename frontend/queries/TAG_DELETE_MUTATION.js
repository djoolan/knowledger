import gql from 'graphql-tag'

const TAG_DELETE_MUTATION = gql`
    mutation TAG_DELETE_MUTATION($id: ID!) {
        deleteTag(id:$id) {
            id
        }
    }
`

export default TAG_DELETE_MUTATION