import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LabelField from '../../../form/LabelField'
import InputField from '../../../form/InputField'

class ArticleTitleField extends Component {
    render() {
        const { value, handleChange } = this.props
        const name = "title"
        return (
            <LabelField
                name={name}
                label="Title">
                <InputField
                    name={name}
                    placeholder="Title"
                    required
                    {...this.props} />
            </LabelField>
        )
    }
}

ArticleTitleField.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default ArticleTitleField