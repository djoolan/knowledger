import React, { Component } from 'react';
import { Query } from 'react-apollo'
import TAGS_QUERY from '../../../queries/TAGS_QUERY'
import StyledTagsContainer from './styles/StyledTagsContainer';
import StyledTags from './styles/StyledTags.js';
import TagStub from './stub/TagStub'

class Tags extends Component {
    render() {
        return (
            <StyledTagsContainer>
                <Query query={TAGS_QUERY}>
                    { ({ data, error, loading }) => {
                        if (loading) return <p>Loading</p>
                        if (error) return <p>Error : { error.message }</p>
                        return <div>
                            <p className="count">Found { data.tags.length } tags</p>
                            <StyledTags>
                                { data.tags.map(item => <TagStub tag={ item } key={ item.id }></TagStub>) }
                            </StyledTags>
                        </div>
                    }}
                </Query>
            </StyledTagsContainer>
        );
    }
}

export default Tags;