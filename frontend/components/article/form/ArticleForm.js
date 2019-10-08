import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyledArticleForm from './styles/StyledArticleForm'
import Error from '../../Error'
import Router from 'next/router';
import ArticleTitleField from './fields/ArticleTitleField'
import ArticleUriField from './fields/ArticleUriField'
import ArticleAuthorField from './fields/ArticleAuthorField'
import ArticleSourceField from './fields/ArticleSourceField'
import ArticleTagsField from './fields/ArticleTagsField'
import ArticleSummaryField from './fields/ArticleSummaryField'

class ArticleForm extends Component {
    render() {
        const { loading, error, state, handleChange, formAction, submitLabel } = this.props
        return (
            <StyledArticleForm
                disabled={loading}
                aria-busy={loading}
                onSubmit={async e => { 
                    e.preventDefault()
                    const response = await formAction();
                    console.log(response)
                    // Router.push({
                    //     pathname: '/article',
                    //     query: { id: response.data.updateArticle.id }
                    // })
                }}>
                <Error error={error}/>
                <fieldset>
                    <ArticleTitleField value={state.title} handleChange={handleChange} />
                    <ArticleUriField value={state.uri} handleChange={handleChange} />
                    <ArticleAuthorField value={state.author} handleChange={handleChange} />
                    <ArticleSourceField value={state.source} handleChange={handleChange} />
                    <ArticleTagsField value={state.tagsArray} handleChange={handleChange} />
                    <ArticleSummaryField value={state.summary} handleChange={handleChange} />
                    <button type="submit"> {submitLabel} </button>
                </fieldset>
            </StyledArticleForm>
        )
    }
}

ArticleForm.propTypes = {
    state: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    formAction: PropTypes.func.isRequired,
    submitLabel: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.object,
}
export default ArticleForm