import React, { Component } from 'react';
import { Query } from 'react-apollo'
import CATEGORIES_QUERY from '../../../queries/CATEGORIES_QUERY'
import StyledCategoriesContainer from './styles/StyledCategoriesContainer';
import StyledCategories from './styles/StyledCategories.js';
import CategoryBlock from './block/CategoryBlock'
import StyledLoader from '../../loader/styles/StyledLoader'

class Categories extends Component {
    render() {
        return (
            <StyledCategoriesContainer>
                <Query query={CATEGORIES_QUERY}>
                    { ({ data, error, loading }) => {
                        if (loading) return <StyledLoader>Loading</StyledLoader>
                        if (error) return <p>Error : { error.message }</p>
                        return <div>
                            <p className="count">Found { data.categories.length } categories</p>
                            <StyledCategories>
                                { data.categories.map(item => <CategoryBlock category={ item } key={ item.id }></CategoryBlock>) }
                            </StyledCategories>
                        </div>
                    }}
                </Query>
            </StyledCategoriesContainer>
        );
    }
}

export default Categories;