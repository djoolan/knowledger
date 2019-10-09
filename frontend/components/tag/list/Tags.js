import React, { Component } from 'react';
import { Query } from 'react-apollo'
import TAGS_QUERY from '../../../queries/TAGS_QUERY'
import StyledTagsContainer from './styles/StyledTagsContainer';
import StyledTags from './styles/StyledTags.js';
import TagBlock from './block/TagBlock'
import StyledLoader from '../../loader/styles/StyledLoader'

class Tags extends Component {
    render() {
        return (
            <StyledTagsContainer>
                <Query query={TAGS_QUERY}>
                    { ({ data, error, loading }) => {
                        if (loading) return <StyledLoader>Loading</StyledLoader>
                        if (error) return <p>Error : { error.message }</p>
                        return <div>
                            <p className="count">Found { data.tags.length } tags</p>
                            <StyledTags>
                                { data.tags.map(item => <TagBlock tag={ item } key={ item.id }></TagBlock>) }
                            </StyledTags>
                        </div>
                    }}
                </Query>
            </StyledTagsContainer>
        );
    }
}

export default Tags;