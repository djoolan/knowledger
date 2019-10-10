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
import ArticleCategoriesField from './fields/ArticleCategoriesField'
import ArticleSummaryField from './fields/ArticleSummaryField'
import ArticleIsReadField from './fields/ArticleIsReadField'
import ArticleReadStatusField from './fields/ArticleReadStatusField'

class ArticleForm extends Component {
    render() {
        const { 
            loading, 
            error, 
            state, 
            handleChange, 
            handleChangeTags, 
            handleChangeCategories, 
            handleChangeReadStatus, 
            formAction, 
            submitLabel,
        } = this.props
        return (
            <StyledArticleForm
                disabled={loading}
                aria-busy={loading}
                onSubmit={async e => { 
                    e.preventDefault()
                    const response = await formAction();
                    console.log(response)
                }}>
                <Error error={error}/>
                <div role="group">
                    <ArticleTitleField className="title" value={state.title} handleChange={handleChange} />
                    <ArticleUriField className="uri" value={state.uri} handleChange={handleChange} />
                    <ArticleTagsField className="tags" value={state.tagsArray} handleChange={handleChangeTags} />
                    <ArticleCategoriesField className="categories" value={state.categoriesArray} handleChange={handleChangeCategories} />
                    <ArticleAuthorField className="author" value={state.author} handleChange={handleChange} />
                    <ArticleSourceField className="source" value={state.source} handleChange={handleChange} />
                    <ArticleSummaryField className="summary" value={state.summary} handleChange={handleChange} />
                    <ArticleIsReadField className="isRead" value={!!state.isRead} handleChange={handleChange} />
                    <ArticleReadStatusField className="readStatus" value={state.readStatus} handleChange={handleChangeReadStatus} />
                    <button type="submit"> {submitLabel} </button>
                </div>
            </StyledArticleForm>
        )
    }
}

ArticleForm.propTypes = {
    state: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleChangeTags: PropTypes.func.isRequired,
    handleChangeCategories: PropTypes.func.isRequired,
    handleChangeReadStatus: PropTypes.func.isRequired,
    formAction: PropTypes.func.isRequired,
    submitLabel: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.object,
}
export default ArticleForm