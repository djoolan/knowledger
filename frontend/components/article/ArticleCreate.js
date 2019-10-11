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
        tags: '',
        tagsArray: [],
        categories: '',
        categoriesArray: [],
        isRead: false,
        readStatus: null,
    }
    
    _handleChangeReadStatus = (newValue, actionMeta) => {
        // console.log('_handleChangeReadStatus', newValue)
        this.setState({ readStatus: newValue })
    }

    _handleChangeTags = (newValue, actionMeta) => {
        // console.log('_handleChangeTags', newValue)
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
        // console.log('_handleChangeCategories', newValue)
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
        const { name, type, value, checked } = e.target
        const v = type === 'number'
            ? parseFloat(value)
            : type === 'checkbox'
                ? checked
                : value
        // console.log('_handleChange', { name, type, checked, value, v })
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
                // console.log('data', data)
                // console.log('this.state', this.state)
                return (
                    <ArticleForm
                        className="article-create-form"
                        loading
                        error={error}
                        state={this.state}
                        handleChange={this._handleChange}
                        handleChangeTags={this._handleChangeTags}
                        handleChangeCategories={this._handleChangeCategories}
                        handleChangeReadStatus={this._handleChangeReadStatus}
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