import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LabelField from '../../../form/LabelField'
import InputField from '../../../form/InputField'

class ArticleAuthorField extends Component {
    render() {
        const { value, handleChange } = this.props
        const name = "author"
        return (
            <LabelField
                name={name}
                label="Author">
                <InputField
                    name={name}
                    placeholder="Author"
                    {...this.props} />
            </LabelField>
        )
    }
}

ArticleAuthorField.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
}

export default ArticleAuthorField