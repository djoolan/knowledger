import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'
import { APOLLO_CLIENT_ENDPOINT } from '../config'

function createClient({ component }) {
    return new ApolloClient({
        uri: APOLLO_CLIENT_ENDPOINT,
        request: operation => {
            operation.setContext({
                fetchOptions: {
                    credentials: 'include',
                },
                component,
            })
        }
    })
}

export default withApollo(createClient)