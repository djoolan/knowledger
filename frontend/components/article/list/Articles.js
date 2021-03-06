import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'
import Router from 'next/router'
import ARTICLES_FEED_QUERY from '../../../queries/ARTICLES_FEED_QUERY'
import ARTICLES_QUERY from '../../../queries/ARTICLES_QUERY'
import StyledArticlesList from './styles/StyledArticlesList';
import StyledArticlesContainer from './styles/StyledArticlesContainer';
import ArticlesFilter from './ArticlesFilter'
import ArticleBlock from './block/ArticleBlock'
import { ARTICLE_BLOCKS_PER_PAGE, ARTICLE_LINES_PER_PAGE } from '../../../constants'
import StyledLoader from '../../loader/styles/StyledLoader'
import Paginator from '../../utils/Paginator'

const propTypes = {
    page: PropTypes.any.isRequired,
    tags: PropTypes.any,
    categories: PropTypes.any,
    page: PropTypes.any,
}

class Articles extends Component {
    _normalizeProp = (key) => {
        return this.props[key] && this.props[key] !== ''
            ? { [key]: this.props[key] }
            : {}
    }

    _getQueryVariables = () => {
        // console.log('this.props.search', this.props.search)
        // console.log('this.props.tags', this.props.tags)
        // console.log('this.props.categories', this.props.categories)
        const page = parseInt(this.props.page, 10) || 1
        const skip = (page - 1) * ARTICLE_BLOCKS_PER_PAGE
        const first = ARTICLE_BLOCKS_PER_PAGE
        const orderBy = 'createdAt_DESC'
        return {
            ...this._getQueryProps(),
            first, 
            skip, 
            orderBy,
        }
    }

    _getQueryProps = (newProps) => ({
        page: newProps
            ? 1
            : parseInt(this.props.page, 10),
        ...this._normalizeProp('search'),
        ...this._normalizeProp('tags'),
        ...this._normalizeProp('categories'),
        ...newProps,
    })

    _handleChange = (newQueryProps) => {
        const { page, ...queryProps } = this._getQueryProps(newQueryProps)
        const href = `/articles/${page}`
        const queryString = Object.keys(queryProps)
            .filter(k => newQueryProps[k] && newQueryProps[k] !== '')
            .map(k => `${k}=${newQueryProps[k]}`)
            .join('&')

        // console.log('Articles._handleChange', { page, queryProps, queryString })

        Router.push(
            {
                pathname: `/articles/[page]`,
                query: queryProps,
            },
            `${href}${queryString ? `?${queryString}`: ``}`,
        )
    }

    render() {
        // console.log('this._getQueryVariables() : ', this._getQueryVariables())
        return (
            <StyledArticlesContainer className="articles">
                <Query query={ARTICLES_FEED_QUERY} variables={this._getQueryVariables()}>
                    { ({ data, error, loading }) => {
                        // console.log({ data, error, loading })
                        if (loading) return <StyledLoader>Loading</StyledLoader>
                        if (error) return <p>Error : { error.message }</p>
                        // console.log('Articles, data : ', data)
                        const { articlesFeed: { articles, count } } = data
                        const page = parseInt(this.props.page, 10)
                        return (
                            <Fragment>
                                <Paginator 
                                    page={parseInt(this.props.page, 10)} 
                                    pageSize={ARTICLE_BLOCKS_PER_PAGE} 
                                    count={count}
                                    handleChange={this._handleChange}
                                />

                                <ArticlesFilter 
                                    className="filter-form"
                                    tags={this.props.tags ? this.props.tags : ''} 
                                    categories={this.props.categories ? this.props.categories : ''} 
                                    search={this.props.search} 
                                    handleChange={this._handleChange}
                                />

                                <StyledArticlesList>
                                    { articles.map(a => <ArticleBlock article={ a } key={ a.id }></ArticleBlock>) }
                                </StyledArticlesList>
                            </Fragment>
                        )
                    }}
                </Query>
            </StyledArticlesContainer>
        );
    }
}

Articles.propTypes = propTypes

export default Articles