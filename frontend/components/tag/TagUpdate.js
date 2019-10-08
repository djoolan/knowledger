import React, { Component } from 'react';
import PropTypes from 'prop-types'
import StyledTagForm from './styles/StyledTagForm'
import { Mutation } from 'react-apollo';
import TAG_UPDATE_MUTATION from '../../queries/TAG_UPDATE_MUTATION';
import Error from '../Error'

class TagUpdate extends Component {
    state = {
        ...this.props.tag,
    }
    
    handleChange = e => {
        console.log('TagUpdate : handleChange', e)
        const { name, type, value } = e.target
        const v = type === 'number' ? parseFloat(value) : value
        this.setState({ [name]: v })
    }

    render() {
        console.log('state : ', this.state)
        return (
            <Mutation mutation={TAG_UPDATE_MUTATION} variables={this.state}>
            {(updateTag, { data, error, loading }) => {
                return (<StyledTagForm
                    disabled={loading}
                    aria-busy={loading}
                    onSubmit={async e => { 
                        e.preventDefault()
                        console.log('TagUpdate: this.state', this.state)
                        const response = await updateTag();
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
                </StyledTagForm>)
            }}
            </Mutation>
        )
    }
}

TagUpdate.propTypes = {
    tag: PropTypes.object.isRequired
}

export default TagUpdate