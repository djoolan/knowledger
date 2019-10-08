import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import TAG_DELETE_MUTATION from '../../queries/TAG_DELETE_MUTATION'
import Router from 'next/router';
import StyledTagForm from '../tag/styles/StyledTagForm'
import Error from '../Error'

class TagDelete extends Component {
    state = {
        id: this.props.tag.id || '',
    }
    
    render() {
        return (
            <Mutation mutation={TAG_DELETE_MUTATION} variables={this.state}>
            {(deleteTag, { data, error, loading }) => {
                console.log('TagDelete', this.state)
                return (
                    <StyledTagForm
                        disabled={loading}
                        aria-busy={loading}
                        onSubmit={async e => { 
                            e.preventDefault()
                            console.log('TagDelete, onSubmit', this.state)
                            const response = await deleteTag();
                            Router.push({
                                pathname: '/tags',
                            })
                        }}>
                        <Error error={error}/>
                        <fieldset>
                            <button className="delete" type="submit"> Delete </button>
                        </fieldset>
                    </StyledTagForm>
                )
            }}
            </Mutation>
        )
    }
}

TagDelete.propTypes = {
    tag: PropTypes.object.isRequired
}
export default TagDelete