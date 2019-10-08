import React, { Component } from 'react';
import ArticleUpdate from './ArticleUpdate';
import { Query } from 'react-apollo'
import ARTICLE_QUERY from '../../queries/ARTICLE_QUERY'
import { withRouter } from 'next/router'

function Article({ router }) {
    const { id } = router.query
    return (
        <Query query={ARTICLE_QUERY} variables={{ id }}>
            {({ data, loading, error }) => {
                if (loading) return <p>Loading</p>
                if (error) return <p>Error : { error.message }</p>
                const { article } = data
                return (
                    <ArticleUpdate article={article} />
                )
            }} 
        </Query>
    )
}

export default withRouter(Article)