import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import TAGS_QUERY from '../../../../queries/TAGS_QUERY'
import LabelField from '../../../form/LabelField'
import CreatableSelect from 'react-select/creatable'

class ArticleTagsField extends Component {
    render() {
        const { value, handleChange } = this.props
        const name = "tags"
        return (
            <LabelField
                name={name}
                label="Tags">
                <Query query={TAGS_QUERY}>
                { ({ data, error, loading }) => {
                    if (loading) return <p>Loading</p>
                    if (error) return <p>Error : { error.message }</p>
                    const options = data.tags.map(tag => ({ value: tag.label, label: tag.label }))
                    const defaultValue = value
                        ? options.filter(tag => value.map(v => v.label).includes(tag.label))
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

ArticleTagsField.propTypes = {
    value: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default ArticleTagsField