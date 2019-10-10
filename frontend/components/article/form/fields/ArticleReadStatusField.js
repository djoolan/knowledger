import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LabelField from '../../../form/LabelField'
import ReadStatusSelect from '../../../readStatus/form/ReadStatusSelect'

class ArticleReadStatusField extends Component {
    render() {
        const { value, handleChange } = this.props
        const creatable = this.props.creatable
            ? !!this.props.creatable
            : true
        const name = "readStatus"
        return (
            <LabelField
                name={name}
                label="Read status">
                <ReadStatusSelect
                    name={name}
                    value={value}
                    handleChange={handleChange}
                    creatable={creatable}
                />
            </LabelField>
        )
    }
}

ArticleReadStatusField.propTypes = {
    value: PropTypes.any,
    handleChange: PropTypes.func,
    creatable: PropTypes.bool,
}

export default ArticleReadStatusField