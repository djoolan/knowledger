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
        // ...this.props.article,
    }
    
    handleChangeTags = (newValue, actionMeta) => {
        if (newValue) {
            this.setState({ 
                tags: newValue.map(v => v.label).join(','),
                tagsArray: newValue,
            })
            return
        }
        this.setState({ 
            tags: '', 
            tagsArray: []
        })
    }

    handleChangeCategories = (newValue, actionMeta) => {
        if (newValue) {
            this.setState({ 
                categories: newValue.map(v => v.label).join(','),
                categoriesArray: newValue,
            })
            return
        }
        this.setState({ 
            categories: '', 
            categories: []
        })
    }

    handleChange = e => {
        console.log('ArticleUpdate : handleChange', e)
        console.log('state', this.state)
        console.log('tags', this.state.tags)
        console.log('tagsArray', this.state.tagsArray)
        const { name, type, value } = e.target
        const v = type === 'number' ? parseFloat(value) : value
        this.setState({ [name]: v })
    }

    updateCacheAfterMutation = (store, article) => {
        console.log('article', article)
        const data = store.readQuery({ query: ARTICLES_QUERY })
        const cachedArticle = data.articles.find(a => a.id === article.id)
        Object.keys(article).forEach(p => cachedArticle[p] = article[p])
        console.log('cachedArticle', cachedArticle)
    }

    render() {
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
                        loading
                        error={error}
                        state={this.state}
                        handleChange={this.handleChange}
                        handleChangeTags={this.handleChangeTags}
                        handleChangeCategories={this.handleChangeCategories}
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