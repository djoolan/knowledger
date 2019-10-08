import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TextareaField extends Component {
    render() {
        const { name, placeholder, value, handleChange, rows, required } = this.props
        return (
            <textarea 
                value={value}
                onChange={handleChange}
                id={name}
                name={name}
                rows={rows}
                placeholder={placeholder}
                { ...required
                    ? { required: true }
                    : {}
                } 
            />
        )
    }
}

TextareaField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    rows: PropTypes.string.isRequired,
    required: PropTypes.bool,
}

export default TextareaField