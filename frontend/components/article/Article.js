import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleUpdate from './update/ArticleUpdate';
import StyledArticle from './styles/StyledArticle';
import Link from 'next/link'
import StyledArticleTitle from './styles/StyledArticleTitle';
import { Query } from 'react-apollo'
import ARTICLE_QUERY from '../../queries/ARTICLE_QUERY'
import { withRouter } from 'next/router'

function Page({ router }) {
  return <p>{router.pathname}</p>
}

function Article({ router }) {
    // static async getInitialProps({ req }) {
    //     console.log('Article, req', req)
    //     const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    //     return { userAgent }
    // }
    const { id } = router.query
    return (
        <Query query={ARTICLE_QUERY} variables={{ id }}>
            {({ data, loading, error }) => {
                if (loading) return <p>Loading</p>
                if (error) return <p>Error : { error.message }</p>
                const { article } = data
                return (
                    <ArticleUpdate article={article}>

                    </ArticleUpdate>
                    // <StyledArticle>
                    //     <p>{ article.title }</p>
                    //     <p>{ article.uri }</p>
                    //     <p>{ article.summary }</p>
                    //     <p>{ article.takeaway }</p>
                    //  </StyledArticle>
                )
            }} 
        </Query>
    )
}

export default withRouter(Article)