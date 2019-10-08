import gql from 'graphql-tag'

const ARTICLE_DELETE_MUTATION = gql`
    mutation ARTICLE_DELETE_MUTATION($id: ID!) {
        deleteArticle(id:$id) {
            id
        }
    }
`

export default ARTICLE_DELETE_MUTATION