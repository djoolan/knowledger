import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import ARTICLES_IMPORT_MUTATION from '../../queries/ARTICLES_IMPORT_MUTATION'
import Error from '../Error'
import StyledArticleForm from './form/styles/StyledArticleForm'
import ArticlesJsonField from './form/fields/ArticlesJsonField'

class ArticlesImport extends Component {
    state = {
        json: '',
    }

    handleChange = e => {
        const { name, type, value } = e.target
        const v = type === 'number' ? parseFloat(value) : value
        this.setState({ [name]: v })
    }

    render() {
        return (
            <Mutation mutation={ARTICLES_IMPORT_MUTATION} variables={this.state}>
            {(importArticles, { data, error, loading }) => {
                return (
                    <StyledArticleForm
                        disabled={loading}
                        aria-busy={loading}
                        onSubmit={async e => { 
                            e.preventDefault()
                            const response = await importArticles();
                        }}>
                        <Error error={error}/>
                        <fieldset>
                            <ArticlesJsonField value={this.state.json} handleChange={this.handleChange} />
                            <button type="submit"> Import </button>
                        </fieldset>
                    </StyledArticleForm>
                )
            }}
            </Mutation>
        )
    }
}

export default ArticlesImport