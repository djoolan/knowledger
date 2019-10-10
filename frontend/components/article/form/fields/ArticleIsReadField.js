import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LabelField from '../../../form/LabelField'

class ArticleIsReadField extends Component {
    render() {
        const { value, handleChange } = this.props
        const name = "isRead"
        // console.log('ArticleIsReadField, value : ', value)
        return (
            <LabelField
                name={name}
                label="Is read?">
                <input
                    type="checkbox"
                    name={name}
                    checked={!!value}
                    onChange={handleChange}
                />
            </LabelField>
        )
    }
}

ArticleIsReadField.propTypes = {
    value: PropTypes.bool.isRequired,
    handleChange: PropTypes.func,
}

export default ArticleIsReadField