import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LabelField from '../../../form/LabelField'
import TagSelect from '../../../tag/form/TagSelect'

class ArticleTagsField extends Component {
    render() {
        const { value, handleChange } = this.props
        const name = "tags"
        return (
            <LabelField
                name={name}
                label="Tags">
                <TagSelect
                    name={name}
                    value={value}
                    handleChange={handleChange}
                    creatable={true}
                    isMulti={true}
                />
            </LabelField>
        )
    }
}

ArticleTagsField.propTypes = {
    value: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default ArticleTagsField