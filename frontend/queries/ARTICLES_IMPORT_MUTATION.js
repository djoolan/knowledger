import gql from 'graphql-tag'

const ARTICLES_IMPORT_MUTATION = gql`
    mutation ARTICLES_IMPORT_MUTATION(
        $json: String!
    ) {
        importArticles(
            json:$json
        )
         {
            id
        }
    }
`

export default ARTICLES_IMPORT_MUTATION