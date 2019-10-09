import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
        console.log('ArticleCreate: handleChange', e)
        console.log('state', this.state)
        console.log('tags', this.state.tags)
        console.log('categories', this.state.categories)
        const { name, type, value } = e.target
        const v = type === 'number' ? parseFloat(value) : value
        this.setState({ [name]: v })
    }

    render() {
        const { update } = this.props
        return (
            <Mutation 
                mutation={ARTICLE_CREATE_MUTATION} 
                variables={this.state}
                update={(store, { data: { createArticle } }) => update(store, createArticle)}
            >
            {(createArticle, { data, error, loading }) => {
                console.log(data)
                console.log(this.state)
                return (
                    <ArticleForm
                        loading
                        error={error}
                        state={this.state}
                        handleChange={this.handleChange}
                        handleChangeTags={this.handleChangeTags}
                        handleChangeCategories={this.handleChangeCategories}
                        formAction={createArticle}
                        submitLabel="Create"
                    />
                )
            }}
            </Mutation>
        )
    }
}

ArticleCreate.propTypes = {
    update: PropTypes.func.isRequired,
}

export default ArticleCreate