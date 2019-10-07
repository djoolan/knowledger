import React, { Component } from 'react';
import { Query } from 'react-apollo'
import ARTICLES_QUERY from '../../../queries/ARTICLES_QUERY'
import StyledArticlesList from './styles/StyledArticlesList';
import StyledArticlesContainer from './styles/StyledArticlesContainer';
import ArticleStub from './stub/ArticleStub'

class Articles extends Component {
    render() {
        return (
            <StyledArticlesContainer>
                {/* <h2>Articles</h2> */}
                <Query query={ARTICLES_QUERY}>
                    { ({ data, error, loading }) => {
                        if (loading) return <p>Loading</p>
                        if (error) return <p>Error : { error.message }</p>
                        return <div>
                            <p className="count">Found { data.articles.length } articles</p>
                            <StyledArticlesList>
                                { data.articles.map(a => <ArticleStub article={ a } key={ a.id }></ArticleStub>) }
                            </StyledArticlesList>
                        </div>
                    }}
                </Query>
            </StyledArticlesContainer>
        );
    }
}

export default Articles;