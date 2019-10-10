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
    placeholder: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    rows: PropTypes.string,
    required: PropTypes.bool,
}

export default TextareaField