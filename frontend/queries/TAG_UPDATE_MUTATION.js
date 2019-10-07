import gql from 'graphql-tag'

const TAG_UPDATE_MUTATION = gql`
    mutation TAG_UPDATE_MUTATION(
        $id: ID!
        $label: String!
    ) {
        updateTag(
            id:$id
            label: $label
        )
         {
            id
        }
    }
`

export default TAG_UPDATE_MUTATION