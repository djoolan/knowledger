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
        const { name, type, value } = e.target
        const v = type === 'number' ? parseFloat(value) : value
        this.setState({ [name]: v })
    }

    prepareParams = (...args) => {
        console.log('prepareParams', args)
        return args[0]
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
                        // formAction={this.prepareParams(updateArticle)}
                        submitLabel="Update"
                    />
                )
                // return (<StyledArticleUpdateForm
                //     disabled={loading}
                //     aria-busy={loading}
                //     onSubmit={async e => { 
                //         e.preventDefault()
                //         console.log('ArticleUpdate: this.state', this.state)
                //         const response = await updateArticle();
                //         console.log(response)
                //         // Router.push({
                //         //     pathname: '/article',
                //         //     query: { id: response.data.updateArticle.id }
                //         // })
                //     }}>
                //     <Error error={error}/>
                //     <fieldset>
                //         <ArticleTitleField value={this.state.title} handleChange={this.handleChange} />
                //         <ArticleUriField value={this.state.uri} handleChange={this.handleChange} />
                //         <ArticleAuthorField value={this.state.author} handleChange={this.handleChange} />
                //         <ArticleSourceField value={this.state.source} handleChange={this.handleChange} />
                //         <ArticleTagsField value={this.state.tags} handleChange={this.handleChange} />
                //         <ArticleSummaryField value={this.state.summary} handleChange={this.handleChange} />
                //         <button type="submit"> Update </button>
                //     </fieldset>
                // </StyledArticleUpdateForm>)
            }}
            </Mutation>
        )
    }
}

ArticleUpdate.propTypes = {
    article: PropTypes.object.isRequired
}
export default ArticleUpdate