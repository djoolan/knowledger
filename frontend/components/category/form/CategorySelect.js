import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import CATEGORIES_QUERY from '../../../queries/CATEGORIES_QUERY'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'

class CategorySelect extends Component {
    render() {
        const { name, value, handleChange, creatable, isMulti } = this.props
        return (
            <Query query={CATEGORIES_QUERY}>
            { ({ data, error, loading }) => {
                if (loading) return <p>Loading</p>
                if (error) return <p>Error : { error.message }</p>
                const options = data.categories.map(item => ({ value: item.label, label: item.label }))
                const normalizedValue = value ?
                    Array.isArray(value)
                        ? value.map(v => v.label)
                        : value.split(',')
                    : null
                const defaultValue = normalizedValue
                    ? options.filter(option => normalizedValue.includes(option.label))
                    : null
                const selectProps = {
                    placeholder: (isMulti ? 'Select categories...' : 'Select a category...'),
                    name,
                    isMulti,
                    options,
                    defaultValue,
                    className: 'select-categories',
                    classNamePrefix: 'select-categories' ,
                    onChange: handleChange,
                    isClearable: true,
                }
                return (creatable
                    ? <CreatableSelect { ...selectProps } />
                    : <Select { ...selectProps } />
                )
            }}
            </Query>
        )
    }
}

CategorySelect.propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    creatable: PropTypes.bool,
    isMulti: PropTypes.bool,
}

export default CategorySelect