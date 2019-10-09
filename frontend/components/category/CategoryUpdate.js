import React, { Component } from 'react';
import PropTypes from 'prop-types'
import StyledCategoryForm from './styles/StyledCategoryForm'
import { Mutation } from 'react-apollo';
import CATEGORY_UPDATE_MUTATION from '../../queries/CATEGORY_UPDATE_MUTATION';
import Error from '../Error'

class CategoryUpdate extends Component {
    state = {
        ...this.props.category,
    }
    
    handleChange = e => {
        console.log('CategoryUpdate : handleChange', e)
        const { name, type, value } = e.target
        const v = type === 'number' ? parseFloat(value) : value
        this.setState({ [name]: v })
    }

    render() {
        console.log('state : ', this.state)
        return (
            <Mutation mutation={CATEGORY_UPDATE_MUTATION} variables={this.state}>
            {(updateCategory, { data, error, loading }) => {
                return (<StyledCategoryForm
                    disabled={loading}
                    aria-busy={loading}
                    onSubmit={async e => { 
                        e.preventDefault()
                        console.log('CategoryUpdate: this.state', this.state)
                        const response = await updateCategory();
                        console.log(response)
                    }}>
                    <Error error={error}/>
                    <fieldset>
                        <label htmlFor="label">
                            Label
                            <input 
                                type="text"
                                value={this.state.label}
                                onChange={this.handleChange}
                                id="label"
                                name="label"
                                placeholder="label"
                                required
                            />
                        </label>

                        <button type="submit"> Update </button>
                    </fieldset>
                </StyledCategoryForm>)
            }}
            </Mutation>
        )
    }
}

CategoryUpdate.propTypes = {
    category: PropTypes.object.isRequired
}

export default CategoryUpdate