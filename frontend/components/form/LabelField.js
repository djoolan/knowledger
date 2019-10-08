import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LabelField extends Component {
    render() {
        const { name, label, children } = this.props
        return (
            <label className={name} htmlFor={name}>
                {label}
                {children}
            </label>
        )
    }
}

LabelField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export default LabelField