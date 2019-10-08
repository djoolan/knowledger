import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import ARTICLE_UPDATE_MUTATION from '../../queries/ARTICLE_UPDATE_MUTATION'
import Router from 'next/router';
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
        tags: this.props.article.tags.map(v => v.label).join(','),
        // ...this.props.article,
    }
    
    handleTagsChanged = (newValue, actionMeta) => {
        this.setState({ tags: newValue.map(v => v.label).join(',') })
        this.setState({ tagsArray: newValue })
    }

    handleChange = (e, actionMeta) => {
        if (actionMeta) {
            this.handleTagsChanged(e, actionMeta)
            return
        }
        console.log('ArticleUpdate : handleChange', e)
        console.log('state', this.state)
        console.log('tags', this.state.tags)
        console.log('tagsArray', this.state.tagsArray)
        const { name, type, value } = e.target
        const v = type === 'number' ? parseFloat(value) : value
        this.setState({ [name]: v })
    }

    render() {
        // console.log('state : ', this.state)
        return (
            <Mutation mutation={ARTICLE_UPDATE_MUTATION} variables={this.state}>
            {(updateArticle, { data, error, loading }) => {
                return (
                    <ArticleForm
                        loading
                        error={error}
                        state={this.state}
                        handleChange={this.handleChange}
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
    article: PropTypes.object.isRequired
}
export default ArticleUpdate