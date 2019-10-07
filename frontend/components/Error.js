import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledError from './styles/StyledError'

class Error extends Component {
    render() {
        const { error } = this.props
        if (!error || !error.message) return null

        if (
            error.networkError &&
            error.networkError.result &&
            error.networkError.result.errors.length
        ) {
            return error.networkError.result.errors.map((error, i) => (
                <StyledError key={i}>
                    <p>
                        <strong>ERROR:</strong>
                        {error.message.replace('GraphQL error:', '')}
                    </p>
                </StyledError>
            ))
        }
    
        return (
            <StyledError>
                <p>
                    <strong>ERROR:</strong>
                    {error.message.replace('GraphQL error:', '')}
                </p>
            </StyledError>
        )
    }
}

Error.defaultProps = {
    error: {}
};

Error.propTypes = {
    error: PropTypes.object
};

export default Error