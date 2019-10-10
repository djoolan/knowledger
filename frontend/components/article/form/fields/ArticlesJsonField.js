import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LabelField from '../../../form/LabelField'
import TextareaField from '../../../form/TextareaField'

class ArticlesJsonField extends Component {
    render() {
        const { value, handleChange } = this.props
        const name = "json"
        return (
            <LabelField
                name={name}
                label="JSON">
                <TextareaField
                    name={name}
                    placeholder="JSON"
                    rows="30"
                    {...this.props} />
            </LabelField>
        )
    }
}

ArticlesJsonField.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
}

export default ArticlesJsonField