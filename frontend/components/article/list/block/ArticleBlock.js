import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import StyledArticleBlock from './styles/StyledArticleBlock';
import StyledArticleBlockTitle from './styles/StyledArticleBlockTitle';

const propTypes = {
    article: PropTypes.object.isRequired
}

class ArticleBlock extends Component {
    render() {
        const { article } = this.props 
        // console.log('article', article)
        return (
            <StyledArticleBlock>
                {
                    article.categories
                        ? <p>{article.categories.map((category, index) => (
                            <span key={index} className="category">{category.label}</span>
                        ))}</p>
                        : null
                }
                <StyledArticleBlockTitle>
                    <Link href="/article/[id]" as={`/article/${article.id}`}>
                        <a>{article.title}</a>
                    </Link>
                    {/* <Link href={{
                        pathname: '/article',
                        query: { id: article.id }
                    }}>
                        <a>{ article.title }</a>
                    </Link> */}
                </StyledArticleBlockTitle>
                {
                    article.tags
                        ? <p>{article.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag.label}</span>
                        ))}</p>
                        : null
                }
                <a className="directLink" target="blank" href={article.uri}>
                    <i className="fas fa-external-link-alt"></i>
                </a>
                <p>
                    <span className="author">{ article.author }</span> in <span className="source">{ article.source }</span>
                </p>
                <p>{ article.summary }</p>
                {/* <p>{ article.takeaway }</p> */}
                {/* <div className="actionButtons">
                    <Link href={{ pathname: 'edit', query: { id: article.id }}}>
                        <a>Edit</a>
                    </Link>
                    <Link href={{ pathname: 'remove', query: { id: article.id }}}>
                        <a>Remove</a>
                    </Link>
                </div> */}
            </StyledArticleBlock>
        )
    }
}

ArticleBlock.propTypes = propTypes;

export default ArticleBlock;