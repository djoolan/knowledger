import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import TAGS_QUERY from '../../../queries/TAGS_QUERY'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'

class TagSelect extends Component {
    render() {
        const { name, value, handleChange, creatable, isMulti } = this.props
        return (
            <Query query={TAGS_QUERY}>
            { ({ data, error, loading }) => {
                if (loading) return <p>Loading</p>
                if (error) return <p>Error : { error.message }</p>
                const options = data.tags.map(tag => ({ value: tag.label, label: tag.label }))
                const normalizedValue = value ?
                    Array.isArray(value)
                        ? value.map(v => v.label)
                        : value.split(',')
                    : null
                const defaultValue = normalizedValue
                    ? options.filter(tag => normalizedValue.includes(tag.label))
                    : null
                const selectProps = {
                    placeholder: (isMulti ? 'Select tags...' : 'Select a tag...'),
                    name,
                    isMulti,
                    options,
                    defaultValue,
                    className: 'select',
                    classNamePrefix: 'select' ,
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

TagSelect.propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    creatable: PropTypes.bool,
    isMulti: PropTypes.bool,
}

export default TagSelect