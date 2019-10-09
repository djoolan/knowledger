import gql from 'graphql-tag'

const CATEGORY_UPDATE_MUTATION = gql`
    mutation CATEGORY_UPDATE_MUTATION(
        $id: ID!
        $label: String!
    ) {
        updateCategory(
            id:$id
            label: $label
        )
         {
            id
        }
    }
`

export default CATEGORY_UPDATE_MUTATION