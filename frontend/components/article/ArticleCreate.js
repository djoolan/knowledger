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
        tags: [],
    }
    
    handleTagsChanged = (newValue, actionMeta) => {
        this.setState({ tags: newValue })
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
                // return (<StyledArticleCreateForm
                //     disabled={loading}
                //     aria-busy={loading}
                //     onSubmit={async e => { 
                //         e.preventDefault()
                //         console.log('ArticleCreate: this.state', this.state)
                //         const response = await createArticle();
                //         console.log(response)
                //         Router.push({
                //             pathname: '/article',
                //             query: { id: response.data.createArticle.id }
                //         })
                //     }}>
                //     <Error error={error} />
                //     <fieldset>
                //         <label htmlFor="title">
                //             Title
                //             <input 
                //                 type="text"
                //                 value={this.state.title}
                //                 onChange={this.handleChange}
                //                 id="title"
                //                 name="title"
                //                 placeholder="Title"
                //                 required
                //             />
                //         </label>
                //         <label htmlFor="uri">
                //             URI
                //             <input 
                //                 type="text"
                //                 value={this.state.uri}
                //                 onChange={this.handleChange}
                //                 id="uri"
                //                 name="uri"
                //                 placeholder="http://www.google.com"
                //                 required
                //             />
                //         </label>
                //         <label htmlFor="author">
                //             Author
                //             <input 
                //                 type="text"
                //                 value={this.state.author}
                //                 onChange={this.handleChange}
                //                 id="author"
                //                 name="author"
                //                 placeholder="author"
                //             />
                //         </label>
                //         <label htmlFor="source">
                //             Source
                //             <input 
                //                 type="text"
                //                 value={this.state.source}
                //                 onChange={this.handleChange}
                //                 id="source"
                //                 name="source"
                //                 placeholder="source"
                //             />
                //         </label>
                //         {/* <label htmlFor="tags">
                //             Tags
                //             <input 
                //                 type="text"
                //                 value={this.state.tags}
                //                 onChange={this.handleChange}
                //                 id="tags"
                //                 name="tags"
                //                 placeholder="tags"
                //             />
                //         </label> */}
                //         <Query query={TAGS_QUERY}>
                //             { ({ data, error, loading }) => {
                //                 if (loading) return <p>Loading</p>
                //                 if (error) return <p>Error : { error.message }</p>
                //                 const options = data.tags.map(tag => ({ value: tag.label, label: tag.label }))
                //                 // const defaultValue = options.filter(tag => tag.label)
                //                 return (
                //                     <CreatableSelect
                //                         name="tags"
                //                         isMulti
                //                         isClearable
                //                         className="select"
                //                         classNamePrefix="select" 
                //                         options={options}
                //                     />
                //                 )
                //             }}
                //         </Query>
                //         <label htmlFor="summary">
                //             Summary
                //             <textarea
                //                 value={this.state.summary}
                //                 onChange={this.handleChange}
                //                 rows="10"
                //                 id="summary"
                //                 name="summary"
                //                 placeholder="Summary"
                //             />
                //         </label>
                //         {/* <label htmlFor="price">
                //             Price
                //             <input 
                //                 type="number"
                //                 value={this.state.price}
                //                 onChange={this.handleChange}
                //                 id="price"
                //                 name="price"
                //                 placeholder="price"
                //                 required
                //             /> <span className="free"> { this.state.price === 0 ? 'Gratuit' : '' } </span>
                //         </label> */}

                //         <button type="submit"> Create </button>
                //     </fieldset>
                // </StyledArticleCreateForm>)
            }}
            </Mutation>
        )
    }
}

export default ArticleCreate