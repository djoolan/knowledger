import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InputField extends Component {
    render() {
        const { name, placeholder, value, handleChange, required } = this.props
        return (
            <input 
                type="text"
                value={value}
                onChange={handleChange}
                id={name}
                name={name}
                placeholder={placeholder}
                { ...required
                    ? { required: true }
                    : {}
                } 
            />
        )
    }
}

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
}

export default InputField