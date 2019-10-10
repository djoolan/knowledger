import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LabelField from '../../../form/LabelField'
import ReadStatusSelect from '../../../readStatus/form/ReadStatusSelect'

class ArticleReadStatusField extends Component {
    render() {
        const { value, handleChange } = this.props
        const name = "readStatus"
        return (
            <LabelField
                name={name}
                label="Read status">
                <ReadStatusSelect
                    name={name}
                    value={value}
                    handleChange={handleChange}
                    creatable={true}
                />
            </LabelField>
        )
    }
}

ArticleReadStatusField.propTypes = {
    value: PropTypes.array,
    handleChange: PropTypes.func,
}

export default ArticleReadStatusField