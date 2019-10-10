import React, { Component, Fragment } from 'react'
import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import ARTICLES_QUERY from '../../queries/ARTICLES_QUERY'
import ARTICLE_QUERY from '../../queries/ARTICLE_QUERY'
import ArticleCreate from './ArticleCreate'
import ArticleUpdate from './ArticleUpdate'
import ArticleDelete from './ArticleDelete'
import StyledLoader from '../loader/styles/StyledLoader'
import StyledError from '../styles/StyledError'

function Article({ router }) {
    const { id } = router.query
    async function updateCacheAfterCreate(store, article) {
        // console.log('updateCacheAfterCreate, article', article, store)
        try {
            const data = await store.readQuery({ query: ARTICLES_QUERY })
            data.articles.push(article)
        } catch (e) {
        }
        router.push({
            pathname: `/article/${article.id}`,
        })
    }

    function updateCacheAfterUpdate(store, article) {
        // console.log('updateCacheAfterUpdate, article', article)
        try {
            const data = store.readQuery({ query: ARTICLES_QUERY })
            const cachedArticle = data.articles.find(a => a.id === article.id)
            Object.keys(article).forEach(p => cachedArticle[p] = article[p])
        } catch (e) {
        }
    }

    function updateCacheAfterDelete(store, article) {
        // console.log('updateCacheAfterDelete, article', article)
        try {
            const data = store.readQuery({ query: ARTICLES_QUERY })
            data.articles = data.articles.filter(a => a.id !== article.id)
        } catch (e) {
        }
        router.push({
            pathname: '/articles',
        })
    }

    // console.log('article', { id })
    return id === 'create'
        ? (
            <ArticleCreate 
                update={updateCacheAfterCreate}
            />
        )
        : (
            <Query query={ARTICLE_QUERY} variables={{ id }}>
                {({ data, loading, error }) => {
                    // console.log('article', { data, loading, error })
                    if (loading) return <StyledLoader>Loading</StyledLoader>
                    if (error) return <StyledError>Error : { error.message }</StyledError>
                    const { article } = data
                    // console.log('article', article)
                    return (
                        <Fragment>
                            <ArticleDelete 
                                article={article} 
                                update={updateCacheAfterDelete}
                            />
                            <ArticleUpdate
                                article={article}
                                update={updateCacheAfterUpdate}
                            />
                        </Fragment>
                    )
                }} 
            </Query>
        )
}
export const articleComponentFactory = Article
export const ArticleComponent = Article

export default withRouter(Article)