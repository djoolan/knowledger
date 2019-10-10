import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import StyledArticleBlock from './styles/StyledArticleBlock';
import StyledArticleBlockTitle from './styles/StyledArticleBlockTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { timeDifferenceForDate } from '../../../../utils'

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
                        ? <div className="tags">{article.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag.label}</span>
                        ))}</div>
                        : null
                }
                <a className="direct-link" target="blank" href={article.uri}>
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
                <p className="author-source">
                    <span className="author">{ article.author }</span> in <span className="source">{ article.source }</span>
                </p>
                <p className="summary">{ article.summary }</p>
                {/* <p>{ article.takeaway }</p> */}
                {/* <div className="actionButtons">
                    <Link href={{ pathname: 'edit', query: { id: article.id }}}>
                        <a>Edit</a>
                    </Link>
                    <Link href={{ pathname: 'remove', query: { id: article.id }}}>
                        <a>Remove</a>
                    </Link>
                </div> */}
                <span className="ago">{timeDifferenceForDate(article.createdAt)}</span>
            </StyledArticleBlock>
        )
    }
}

ArticleBlock.propTypes = propTypes;

export default ArticleBlock;