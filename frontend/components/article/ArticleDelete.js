import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import ARTICLE_DELETE_MUTATION from '../../queries/ARTICLE_DELETE_MUTATION'
import Router from 'next/router'
import StyledArticleForm from '././form/styles/StyledArticleForm'
import Error from '../Error'

class ArticleDelete extends Component {
    state = {
        id: this.props.article.id || '',
    }
    
    render() {
        const { update } = this.props
        return (
            <Mutation 
                mutation={ARTICLE_DELETE_MUTATION} 
                variables={this.state}
                update={(store, { data: { deleteArticle } }) => update(store, deleteArticle)}
            >
            {(deleteArticle, { data, error, loading }) => {
                return (
                    <StyledArticleForm
                        className="delete"
                        disabled={loading}
                        aria-busy={loading}
                        onSubmit={async e => { 
                            e.preventDefault()
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
    article: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
}

export default ArticleDelete