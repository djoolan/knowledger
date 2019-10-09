import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import CATEGORIES_QUERY from '../../../../queries/CATEGORIES_QUERY'
import LabelField from '../../../form/LabelField'
import CreatableSelect from 'react-select/creatable'

class ArticleCategoriesField extends Component {
    render() {
        const { value, handleChange } = this.props
        const name = "categories"
        return (
            <LabelField
                name={name}
                label="Categories">
                <Query query={CATEGORIES_QUERY}>
                { ({ data, error, loading }) => {
                    if (loading) return <p>Loading</p>
                    if (error) return <p>Error : { error.message }</p>
                    console.log(data)
                    const options = data.categories 
                        ? data.categories.map(category => ({ 
                            value: category.label, 
                            label: category.label,
                        }))
                        : []
                    const defaultValue = value
                        ? options.filter(category => value.map(v => v.label).includes(category.label))
                        : null
                    return (
                        <CreatableSelect
                            name={name}
                            isMulti
                            isClearable
                            className="select"
                            classNamePrefix="select" 
                            options={options}
                            defaultValue={defaultValue}
                            onChange={handleChange}
                        />
                    )
                }}
                </Query>
            </LabelField>
        )
    }
}

ArticleCategoriesField.propTypes = {
    value: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default ArticleCategoriesField