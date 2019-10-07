import App, { Container } from 'next/app'
import Page from '../components/Page'
import GlobalStyle from '../components/styles/GlobalStyle'
import { ApolloProvider } from 'react-apollo'
import withData from './withData'

class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps, apollo } = this.props
        return (
            <ApolloProvider client={apollo}>
            <Page>
                <Component {...pageProps} />
                <GlobalStyle />
            </Page>
            </ApolloProvider>
        )
    } 
}

export default withData(MyApp)