import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import StyledArticleStub from './styles/StyledArticleStub';
import StyledArticleStubTitle from './styles/StyledArticleStubTitle';

const propTypes = {
    article: PropTypes.object.isRequired
}

class ArticleStub extends Component {
    render() {
        const { article } = this.props 
        return (
            <StyledArticleStub>
                <StyledArticleStubTitle>
                    <Link href="/article/[id]" as={`/article/${article.id}`}>
                        <a>{article.title}</a>
                    </Link>
                    {/* <Link href={{
                        pathname: '/article',
                        query: { id: article.id }
                    }}>
                        <a>{ article.title }</a>
                    </Link> */}
                </StyledArticleStubTitle>
                {
                    article.tags
                        ? <p>{article.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag.label}</span>
                        ))}</p>
                        : null
                }
                <a className="directLink" href={article.uri}>Lien ></a>
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
            </StyledArticleStub>
        )
    }
}

ArticleStub.propTypes = propTypes;

export default ArticleStub;