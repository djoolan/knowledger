import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LabelField from '../../../form/LabelField'
import CategorySelect from '../../../category/form/CategorySelect'

class ArticleCategoriesField extends Component {
    render() {
        const { value, handleChange } = this.props
        const name = "categories"
        return (
            <LabelField
                name={name}
                label="Categories">
                <CategorySelect
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

ArticleCategoriesField.propTypes = {
    value: PropTypes.any,
    handleChange: PropTypes.func,
}

export default ArticleCategoriesField