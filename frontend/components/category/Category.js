import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo'
import CATEGORY_QUERY from '../../queries/CATEGORY_QUERY'
import { withRouter } from 'next/router'
import CategoryDelete from './CategoryDelete';
import CategoryUpdate from './CategoryUpdate';
import StyledLoader from '../loader/styles/StyledLoader'

function Category({ router }) {
    const { id } = router.query
    return (
        <Query query={CATEGORY_QUERY} variables={{ id }}>
            {({ data, loading, error }) => {
                if (loading) return <StyledLoader>Loading</StyledLoader>
                if (error) return <p>Error : { error.message }</p>
                const { category } = data
                return (
                    <Fragment>
                        <CategoryDelete category={category} />
                        <CategoryUpdate category={category} />
                    </Fragment>
                )
            }} 
        </Query>
    )
}

export default withRouter(Category)