import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyledArticleForm from './styles/StyledArticleForm'
import Error from '../../Error'
import Router from 'next/router'
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
                {/* <fieldset> */}
                <div role="group">
                    <ArticleTitleField className="title" value={state.title} handleChange={handleChange} />
                    <ArticleUriField className="uri" value={state.uri} handleChange={handleChange} />
                    <ArticleTagsField className="tags" value={state.tagsArray} handleChange={handleChange} />
                    <ArticleAuthorField className="author" value={state.author} handleChange={handleChange} />
                    <ArticleSourceField className="source" value={state.source} handleChange={handleChange} />
                    <ArticleSummaryField className="summary" value={state.summary} handleChange={handleChange} />
                    <button type="submit"> {submitLabel} </button>
                </div>
                {/* </fieldset> */}
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