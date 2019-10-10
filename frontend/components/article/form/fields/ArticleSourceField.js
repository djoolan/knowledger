import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LabelField from '../../../form/LabelField'
import InputField from '../../../form/InputField'

class ArticleSourceField extends Component {
    render() {
        const { value, handleChange } = this.props
        const name = "source"
        return (
            <LabelField
                name={name}
                label="Source">
                <InputField
                    name={name}
                    placeholder="Source"
                    {...this.props} />
            </LabelField>
        )
    }
}

ArticleSourceField.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
}

export default ArticleSourceField