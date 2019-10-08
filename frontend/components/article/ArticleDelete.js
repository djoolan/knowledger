import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import ARTICLE_DELETE_MUTATION from '../../queries/ARTICLE_DELETE_MUTATION'
import Router from 'next/router';
import StyledArticleForm from '././form/styles/StyledArticleForm'
import Error from '../Error'

class ArticleDelete extends Component {
    state = {
        id: this.props.article.id || '',
    }
    
    render() {
        return (
            <Mutation mutation={ARTICLE_DELETE_MUTATION} variables={this.state}>
            {(deleteArticle, { data, error, loading }) => {
                console.log('ArticleDelete', this.state)
                return (
                    <StyledArticleForm
                        className="delete"
                        disabled={loading}
                        aria-busy={loading}
                        onSubmit={async e => { 
                            e.preventDefault()
                            console.log('ArticleDelete, onSubmit', this.state)
                            const response = await deleteArticle();
                            Router.push({
                                pathname: '/articles',
                            })
                        }}>
                        <Error error={error}/>
                        <div role="group">
                            <button className="delete" type="submit"> Delete </button>
                        </div>
                    </StyledArticleForm>
                )
            }}
            </Mutation>
        )
    }
}

ArticleDelete.propTypes = {
    article: PropTypes.object.isRequired
}
export default ArticleDelete