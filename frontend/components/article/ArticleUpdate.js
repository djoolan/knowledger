import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import ARTICLES_QUERY from '../../queries/ARTICLES_QUERY'
import ARTICLE_UPDATE_MUTATION from '../../queries/ARTICLE_UPDATE_MUTATION'
import Router from 'next/router'
import ArticleForm from './form/ArticleForm'

class ArticleUpdate extends Component {
    state = {
        id: this.props.article.id || '',
        title: this.props.article.title || '',
        uri: this.props.article.uri || '',
        summary: this.props.article.summary || '',
        source: this.props.article.source || '',
        author: this.props.article.author || '',
        tagsArray: this.props.article.tags || [],
        tags: this.props.article.tags ? this.props.article.tags.map(v => v.label).join(',') : '',
        categoriesArray: this.props.article.categories || [],
        categories: this.props.article.categories ? this.props.article.categories.map(v => v.label).join(',') : '',
        isRead: !!this.props.article.isRead,
        readStatus: this.props.article.readStatus,
        // ...this.props.article,
    }
    
    _handleChangeReadStatus = (newValue, actionMeta) => {
        this.setState({ readStatus: newValue })
    }

    _handleChangeTags = (newValue, actionMeta) => {
        this.setState(newValue
            ? {
                tags: newValue.map(v => v.label).join(','),
                tagsArray: newValue,
            }
            : {
                tags: '', 
                tagsArray: []
            })
    }

    _handleChangeCategories = (newValue, actionMeta) => {
        this.setState(newValue
            ? {
                categories: newValue.map(v => v.label).join(','),
                categoriesArray: newValue,
            }
            : {
                categories: '', 
                categoriesArray: []
            })
    }

    _handleChange = e => {
        // console.log('_handleChange', e)
        const { name, type, value, checked } = e.target
        const v = type === 'number'
            ? parseFloat(value)
            : type === 'checkbox'
                ? checked
                : value
        // console.log('_handleChange', { name, type, checked, value, v })
        this.setState({ [name]: v })
    }

    // updateCacheAfterMutation = (store, article) => {
    //     // console.log('article', article)
    //     const data = store.readQuery({ query: ARTICLES_QUERY })
    //     const cachedArticle = data.articles.find(a => a.id === article.id)
    //     Object.keys(article).forEach(p => cachedArticle[p] = article[p])
    //     // console.log('cachedArticle', cachedArticle)
    // }

    render() {
        // console.log('ArticleUpdate, this.props : ', this.props)
        const { update } = this.props
        return (
            <Mutation 
                mutation={ARTICLE_UPDATE_MUTATION} 
                variables={this.state}
                update={(store, { data: { updateArticle } }) => update(store, updateArticle)}
            >
            {(updateArticle, { data, error, loading }) => {
                return (
                    <ArticleForm
                        className="article-update-form"
                        loading
                        error={error}
                        state={this.state}
                        handleChange={this._handleChange}
                        handleChangeTags={this._handleChangeTags}
                        handleChangeCategories={this._handleChangeCategories}
                        handleChangeReadStatus={this._handleChangeReadStatus}
                        formAction={updateArticle}
                        submitLabel="Update"
                    />
                )
            }}
            </Mutation>
        )
    }
}

ArticleUpdate.propTypes = {
    article: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
}

export default ArticleUpdate