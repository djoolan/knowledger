import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import TagSelect from '../../tag/form/TagSelect'
import CategorySelect from '../../category/form/CategorySelect'
import StyledArticlesFilter from './styles/StyledArticlesFilter'
import InputField from '../../form/InputField'

const propTypes = {
    handleChange: PropTypes.func,
    tags: PropTypes.string,
    categories: PropTypes.string,
    search: PropTypes.string,
}

class ArticlesFilter extends Component {
    state = {
        search: this.props.search || '',
    }

    _getFilterProps = (newProps) => ({
        ...this.props.search
            ? { search: this.props.search }
            : {},
        ...this.props.categories
            ? { categories: this.props.categories }
            : {},
        ...this.props.tags
            ? { tags: this.props.tags }
            : {},
        ...newProps,
    })

    _handleChange = e => {
        // console.log('handleChange', this.props.handleChange, this._getFilterProps(this.state))
        this.props.handleChange(this._getFilterProps(this.state))
    }

    _handleChangeSearch = e => {
        const { name, type, value } = e.target
        const v = type === 'number' ? parseFloat(value) : value
        // console.log('_handleChangeSearch', { name, type, value, v })
        this.setState({ [name]: v })
    }

    _handleChangeTags = (newValue, actionMeta) => {
        this.props.handleChange(this._getFilterProps({
            tags: newValue ? newValue.value : '',
        }))
    }

    _handleChangeCategories = (newValue, actionMeta) => {
        this.props.handleChange(this._getFilterProps({
            categories: newValue ? newValue.value : '',
        }))
    }

    render() {
        const { search, tags, categories } = this.props
        return (
            <StyledArticlesFilter
                className="articles-filter-form"
                onSubmit={e => { 
                    e.preventDefault()
                    this._handleChange(e)
                }}>
                <InputField 
                    type="text"
                    name="search" 
                    placeholder="Search..."
                    value={this.state.search}
                    handleChange={this._handleChangeSearch}
                />
                <TagSelect
                    name="tags"
                    value={tags}
                    handleChange={this._handleChangeTags}
                />
                <CategorySelect
                    name="categories"
                    value={categories}
                    handleChange={this._handleChangeCategories}
                />
                <button type="submit"> Filter </button>
            </StyledArticlesFilter>
        )
    }
}

ArticlesFilter.propTypes = propTypes;

export default ArticlesFilter