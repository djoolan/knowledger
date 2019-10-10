import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LabelField from '../../../form/LabelField'
import InputField from '../../../form/InputField'

class ArticleUriField extends Component {
    render() {
        const { value, handleChange } = this.props
        const name = "uri"
        return (
            <LabelField
                name={name}
                label="URL">
                <InputField
                    name={name}
                    placeholder="http://"
                    required
                    {...this.props} />
            </LabelField>
        )
    }
}

ArticleUriField.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
}

export default ArticleUriField