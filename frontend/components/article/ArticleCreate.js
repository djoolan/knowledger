import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import ARTICLE_CREATE_MUTATION from '../../queries/ARTICLE_CREATE_MUTATION'
import Error from '../Error'
import Router from 'next/router'
import ArticleForm from './form/ArticleForm'

class ArticleCreate extends Component {
    state = {
        title: '',
        uri: '',
        summary: '',
        takeaway: '',
        source: '',
        author: '',
        image: '',
        tagsArray: [],
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
        console.log('ArticleCreate: handleChange', e)
        console.log('state', this.state)
        console.log('tags', this.state.tags)
        const { name, type, value } = e.target
        const v = type === 'number' ? parseFloat(value) : value
        this.setState({ [name]: v })
    }

    render() {
        return (
            <Mutation mutation={ARTICLE_CREATE_MUTATION} variables={this.state}>
            {(createArticle, { data, error, loading }) => {
                console.log(data)
                console.log(this.state)
                return (
                    <ArticleForm
                        loading
                        error={error}
                        state={this.state}
                        handleChange={this.handleChange}
                        formAction={createArticle}
                        submitLabel="Create"
                    />
                )
            }}
            </Mutation>
        )
    }
}

export default ArticleCreate