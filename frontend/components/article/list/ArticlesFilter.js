import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import TagSelect from '../../tag/form/TagSelect'
import CategorySelect from '../../category/form/CategorySelect'
import StyledArticlesFilter from './styles/StyledArticlesFilter'

const propTypes = {
    handleChange: PropTypes.func.isRequired,
    tags: PropTypes.string.isRequired,
    categories: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
}

class ArticlesFilter extends Component {
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

    _handleChangeTags = (newValue, actionMeta) => {
        console.log('_handleChangeTags', { newValue, actionMeta })
        this.props.handleChange(this._getFilterProps({
            tags: newValue ? newValue.value : '',
        }))
    }

    _handleChangeCategories = (newValue, actionMeta) => {
        console.log('_handleChangeCategories', { newValue, actionMeta })
        this.props.handleChange(this._getFilterProps({
            categories: newValue ? newValue.value : '',
        }))
    }

    render() {
        const { tags, categories } = this.props
        return (
            <StyledArticlesFilter>
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
                {/* <div onChangse={handleChange}>
                    <input type="radio" id="list" name="display" value="list" defaultChecked />
                    <input type="radio" id="grid" name="display" value="grid" />
                </div> */}
                {/* <p>{Object.values({ search, tags, categories } = this.props).join(',')}</p> */}
            </StyledArticlesFilter>
        )
    }
}

ArticlesFilter.propTypes = propTypes;

export default ArticlesFilter