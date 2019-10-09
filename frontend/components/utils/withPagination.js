// import React, { Component, Fragment } from 'react';
// import { Query } from 'react-apollo'
// import Router from 'next/router'
// import PageRouter from '../../../utils/PageRouter'
// import ARTICLES_FEED_QUERY from '../../../queries/ARTICLES_FEED_QUERY'
// import ARTICLES_QUERY from '../../../queries/ARTICLES_QUERY'
// import StyledArticlesList from './styles/StyledArticlesList';
// import StyledArticlesContainer from './styles/StyledArticlesContainer';
// import ArticlesDisplayMenu from './ArticlesDisplayMenu'
// import ArticleBlock from './block/ArticleBlock'
// import { pageSize } from '../../../constants'
// import StyledLoader from '../../loader/styles/StyledLoader'


export default function withPagination(client, options) {
    const pageSize = (options && options.pageSize) || 10
    // _getQueryVariables = () => {
    //     // const page = parseInt(this.props.page, 10)
    //     const page = 1;
    //     const skip = (page - 1) * pageSize
    //     const first = pageSize
    //     const orderBy = 'createdAt_DESC'
    //     return { first, skip, orderBy }
    // }
    
    client.prototype._getQueryVariables = () => {
        console.log(this)
        // const page = parseInt(this.props.page, 10)
        const page = 1;
        const skip = (page - 1) * pageSize
        const first = pageSize
        const orderBy = 'createdAt_DESC'
        return { first, skip, orderBy }
    }

    client.prototype._previousPage = () => {
        console.log(this)
        // const currentPage = parseInt(this.props.page, 10)
        const currentPage = 3
        if (currentPage > 1) {
            // PageRouter.articlesFeedAtPage(currentPage - 1)
        }
    }

    client.prototype._nextPage = count => {
        console.log(this)
        // const currentPage = parseInt(this.props.page, 10)
        const currentPage = 1
        if (currentPage <= count / pageSize) {
            // PageRouter.articlesFeedAtPage(currentPage + 1)
        }
    }


    return client
}

// function Paginator() {
//     _getQueryVariables = () => {
//         const isNewPage = true
//         const page = parseInt(this.props.page, 10)
//         const skip = isNewPage ? (page - 1) * pageSize : 0
//         const first = isNewPage ? pageSize : 100
//         const orderBy = isNewPage ? 'createdAt_DESC' : null
//         return { first, skip, orderBy }
//     }

//     _previousPage = () => {
//         const currentPage = parseInt(this.props.page, 10)
//         if (currentPage > 1) {
//             PageRouter.articlesFeedAtPage(currentPage - 1)
//         }
//     }

//     _nextPage = count => {
//         const currentPage = parseInt(this.props.page, 10)
//         if (currentPage <= count / pageSize) {
//             PageRouter.articlesFeedAtPage(currentPage + 1)
//         }
//         //     const page = currentPage + 1
//         //     Router.push(`/articles/[page]`, `/articles/${page}`)
//         // }
//     }

//     render() {
//         return (
//             <StyledArticlesContainer>
//                 <Query query={ARTICLES_FEED_QUERY} variables={this._getQueryVariables()}>
//                     { ({ data, error, loading }) => {
//                         if (loading) return <StyledLoader>Loading</StyledLoader>
//                         if (error) return <p>Error : { error.message }</p>
//                         const { articlesFeed: { articles, count } } = data
//                         const pageIndex = this.props.page
//                             ? (this.props.page - 1) * pageSize
//                             : 0
//                         const maxPageIndex = Math.ceil(count / pageSize)
//                         return (
//                             <div>
//                                 <div className="nav">
//                                     <div className="pager prev" onClick={this._previousPage}>&lt;<i className="fas fa-caret-left"></i></div>
//                                     <p className="count">Page {this.props.page} / {maxPageIndex} ({ count } articles)</p>
//                                     <div className="pager next" onClick={() => this._nextPage(count)}>&gt;<i className="fas fa-chevron-right"></i></div>
//                                 </div>
//                                 <ArticlesDisplayMenu>

//                                 </ArticlesDisplayMenu>
//                                 <StyledArticlesList>
//                                     { articles.map(a => <ArticleBlock article={ a } key={ a.id }></ArticleBlock>) }
//                                 </StyledArticlesList>
//                             </div>
//                         )
//                     }}
//                 </Query>
//             </StyledArticlesContainer>
//         );
//     }
// }