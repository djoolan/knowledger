import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo'
import TAG_QUERY from '../../queries/TAG_QUERY'
import { withRouter } from 'next/router'
import TagDelete from './TagDelete';
import TagUpdate from './TagUpdate';

function Page({ router }) {
  return <p>{router.pathname}</p>
}

function Tag({ router }) {
    const { id } = router.query
    return (
        <Query query={TAG_QUERY} variables={{ id }}>
            {({ data, loading, error }) => {
                if (loading) return <p>Loading</p>
                if (error) return <p>Error : { error.message }</p>
                const { tag } = data
                return (
                    <Fragment>
                        <TagDelete tag={tag} />
                        <TagUpdate tag={tag} />
                    </Fragment>
                )
            }} 
        </Query>
    )
}

export default withRouter(Tag)