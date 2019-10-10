import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LabelField from '../../../form/LabelField'
import TextareaField from '../../../form/TextareaField'

class ArticleSummaryField extends Component {
    render() {
        const { value, handleChange } = this.props
        const name = "summary"
        return (
            <LabelField
                name={name}
                label="Summary">
                <TextareaField
                    name={name}
                    placeholder="Summary"
                    rows="10"
                    {...this.props} />
            </LabelField>
        )
    }
}

ArticleSummaryField.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
}

export default ArticleSummaryField