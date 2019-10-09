import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import StyledCategoryBlock from './styles/StyledCategoryBlock';
import StyledCategoryBlockTitle from './styles/StyledCategoryBlockTitle';

const propTypes = {
    category: PropTypes.object.isRequired
}

class CategoryBlock extends Component {
    render() {
        const { category } = this.props 
        return (
            <StyledCategoryBlock>
                <StyledCategoryBlockTitle>
                    <Link href="/category/[id]" as={`/category/${category.id}`}>
                        <a>{category.label}</a>
                    </Link>
                </StyledCategoryBlockTitle>
            </StyledCategoryBlock>
        )
    }
}

CategoryBlock.propTypes = propTypes;

export default CategoryBlock;