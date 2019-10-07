import React, { Component } from 'react';
import PropTypes from 'prop-types'
import StyledArticleUpdateForm from '../update/styles/StyledArticleUpdateForm'
import { Mutation } from 'react-apollo';
import ARTICLE_UPDATE_MUTATION from '../../../queries/ARTICLE_UPDATE_MUTATION';
import Error from '../../Error'
import Router from 'next/router';

class ArticleUpdate extends Component {
    state = {
        ...this.props.article,
    }
    
    handleChange = e => {
        console.log('ArticleUpdate : handleChange', e)
        const { name, type, value } = e.target
        const v = type === 'number' ? parseFloat(value) : value
        this.setState({ [name]: v })
    }

    render() {
        console.log('state : ', this.state)
        return (
            <Mutation mutation={ARTICLE_UPDATE_MUTATION} variables={this.state}>
            {(updateArticle, { data, error, loading }) => {
                return (<StyledArticleUpdateForm
                    disabled={loading}
                    aria-busy={loading}
                    onSubmit={async e => { 
                        e.preventDefault()
                        console.log('ArticleUpdate: this.state', this.state)
                        const response = await updateArticle();
                        console.log(response)
                        // Router.push({
                        //     pathname: '/article',
                        //     query: { id: response.data.updateArticle.id }
                        // })
                    }}>
                    <Error error={error}/>
                    {/* ID : <p>{this.state.id}</p> */}
                    <fieldset>
                        <label htmlFor="title">
                            Title
                            <input 
                                type="text"
                                value={this.state.title}
                                onChange={this.handleChange}
                                id="title"
                                name="title"
                                placeholder="Title"
                                required
                            />
                        </label>
                        <label htmlFor="uri">
                            URI
                            <input 
                                type="text"
                                value={this.state.uri}
                                onChange={this.handleChange}
                                id="uri"
                                name="uri"
                                placeholder="http://www.google.com"
                                required
                            />
                        </label>
                        <label htmlFor="author">
                            Author
                            <input 
                                type="text"
                                value={this.state.author}
                                onChange={this.handleChange}
                                id="author"
                                name="author"
                                placeholder="author"
                            />
                        </label>
                        <label htmlFor="source">
                            Source
                            <input 
                                type="text"
                                value={this.state.source}
                                onChange={this.handleChange}
                                id="source"
                                name="source"
                                placeholder="source"
                            />
                        </label>
                        <label htmlFor="tags">
                            Tags
                            <input 
                                type="text"
                                value={this.state.tags}
                                onChange={this.handleChange}
                                id="tags"
                                name="tags"
                                placeholder="tags"
                            />
                        </label>
                        <label htmlFor="summary">
                            Summary
                            <textarea
                                value={this.state.summary}
                                onChange={this.handleChange}
                                rows="10"
                                id="summary"
                                name="summary"
                                placeholder="Summary"
                            />
                        </label>
                        {/* <label htmlFor="price">
                            Price
                            <input 
                                type="number"
                                value={this.state.price}
                                onChange={this.handleChange}
                                id="price"
                                name="price"
                                placeholder="price"
                                required
                            /> <span className="free"> { this.state.price === 0 ? 'Gratuit' : '' } </span>
                        </label> */}

                        <button type="submit"> Update </button>
                    </fieldset>
                </StyledArticleUpdateForm>)
            }}
            </Mutation>
        )
    }
}

ArticleUpdate.propTypes = {
    article: PropTypes.object.isRequired
}
export default ArticleUpdate