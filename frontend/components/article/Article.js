import React, { Component, Fragment } from 'react'
import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import ARTICLE_QUERY from '../../queries/ARTICLE_QUERY'
import ArticleUpdate from './ArticleUpdate'
import ArticleDelete from './ArticleDelete'

function Article({ router }) {
    const { id } = router.query
    return (
        <Query query={ARTICLE_QUERY} variables={{ id }}>
            {({ data, loading, error }) => {
                if (loading) return <p>Loading</p>
                if (error) return <p>Error : { error.message }</p>
                const { article } = data
                return (
                    <Fragment>
                        <ArticleDelete article={article} />
                        <ArticleUpdate article={article} />
                    </Fragment>
                )
            }} 
        </Query>
    )
}

export default withRouter(Article)