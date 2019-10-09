import gql from 'graphql-tag'

const TAGS_QUERY = gql`
    # query TAGS_QUERY($where: String, $orderBy: String, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    #     tags(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
    query TAGS_QUERY {
        tags {
            id
            label
        }
    }
`

export default TAGS_QUERY