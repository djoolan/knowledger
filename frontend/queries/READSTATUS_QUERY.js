import gql from 'graphql-tag'

const READSTATUS_QUERY = gql`
    query READSTATUS_QUERY {
        __type(name: "ArticleReadStatus") {
            name
            enumValues {
                name
            }
        }
    }
`

export default READSTATUS_QUERY