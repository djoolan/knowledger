import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import CATEGORY_DELETE_MUTATION from '../../queries/CATEGORY_DELETE_MUTATION'
import Router from 'next/router';
import StyledCategoryForm from './styles/StyledCategoryForm'
import Error from '../Error'

class CategoryDelete extends Component {
    state = {
        id: this.props.category.id || '',
    }
    
    render() {
        return (
            <Mutation mutation={CATEGORY_DELETE_MUTATION} variables={this.state}>
            {(deleteCategory, { data, error, loading }) => {
                console.log('CategoryDelete', this.state)
                return (
                    <StyledCategoryForm
                        disabled={loading}
                        aria-busy={loading}
                        onSubmit={async e => { 
                            e.preventDefault()
                            console.log('CategoryDelete, onSubmit', this.state)
                            const response = await deleteCategory();
                            Router.push({
                                pathname: '/categories',
                            })
                        }}>
                        <Error error={error}/>
                        <fieldset>
                            <button className="delete" type="submit"> Delete </button>
                        </fieldset>
                    </StyledCategoryForm>
                )
            }}
            </Mutation>
        )
    }
}

CategoryDelete.propTypes = {
    category: PropTypes.object.isRequired
}
export default CategoryDelete