import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo'
import Router from 'next/router'
import ARTICLES_FEED_QUERY from '../../../queries/ARTICLES_FEED_QUERY'
import ARTICLES_QUERY from '../../../queries/ARTICLES_QUERY'
import StyledArticlesList from './styles/StyledArticlesList';
import StyledArticlesContainer from './styles/StyledArticlesContainer';
import ArticlesDisplayMenu from './ArticlesDisplayMenu'
import ArticleBlock from './block/ArticleBlock'
import { ARTICLES_PER_PAGE } from '../../../constants'
import StyledLoader from '../../loader/styles/StyledLoader'
import Paginator from '../../utils/Paginator'

class Articles extends Component {
    _getQueryVariables = () => {
        const page = parseInt(this.props.page, 10)
        const skip = (page - 1) * ARTICLES_PER_PAGE
        const first = ARTICLES_PER_PAGE
        const orderBy = 'createdAt_DESC'
        return { first, skip, orderBy }
    }

    _gotoPage = (page) => {
        Router.push(`/articles/[page]`, `/articles/${page}`)
    }

    render() {
        return (
            <StyledArticlesContainer>
                <Query query={ARTICLES_FEED_QUERY} variables={this._getQueryVariables()}>
                    { ({ data, error, loading }) => {
                        if (loading) return <StyledLoader>Loading</StyledLoader>
                        if (error) return <p>Error : { error.message }</p>
                        const { articlesFeed: { articles, count } } = data
                        const pageIndex = this.props.page
                            ? (this.props.page - 1) * ARTICLES_PER_PAGE
                            : 0
                        const maxPageIndex = Math.ceil(count / ARTICLES_PER_PAGE)
                        return (
                            <Paginator 
                                page={this.props.page} 
                                pageSize={ARTICLES_PER_PAGE} 
                                count={count}
                                handleChange={this._gotoPage}
                            >
                                <ArticlesDisplayMenu>

                                </ArticlesDisplayMenu>
                                <StyledArticlesList>
                                    { articles.map(a => <ArticleBlock article={ a } key={ a.id }></ArticleBlock>) }
                                </StyledArticlesList>
                            </Paginator>
                        )
                    }}
                </Query>
            </StyledArticlesContainer>
        );
    }
}

export default Articles