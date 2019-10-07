import React, { Component } from 'react';
import TagUpdate from './update/TagUpdate';
import { Query } from 'react-apollo'
import TAG_QUERY from '../../queries/TAG_QUERY'
import { withRouter } from 'next/router'

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
                    <TagUpdate tag={tag} />
                )
            }} 
        </Query>
    )
}

export default withRouter(Tag)