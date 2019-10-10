import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import READSTATUS_QUERY from '../../../queries/READSTATUS_QUERY'

class ReadStatusSelect extends Component {
    render() {
        const { name, value, handleChange, creatable, isMulti } = this.props
        return (
            <Query query={READSTATUS_QUERY}>
            { ({ data, error, loading }) => {
                if (loading) return <p>Loading</p>
                if (error) return <p>Error : { error.message }</p>
                const options = data.__type.enumValues.map(item => ({ value: item.name, label: item.name }))
                const defaultValue = value
                    ? options.filter(option => value.includes(option.label))
                    : null
                const selectProps = {
                    placeholder: 'Select a read status...',
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

ReadStatusSelect.propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    creatable: PropTypes.bool,
}

export default ReadStatusSelect