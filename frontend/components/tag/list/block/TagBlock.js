import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import StyledTagBlock from './styles/StyledTagBlock';
import StyledTagBlockTitle from './styles/StyledTagBlockTitle';

const propTypes = {
    tag: PropTypes.object.isRequired
}

class TagBlock extends Component {
    render() {
        const { tag } = this.props 
        return (
            <StyledTagBlock>
                <StyledTagBlockTitle>
                    <Link href="/tag/[id]" as={`/tag/${tag.id}`}>
                        <a>{tag.label}</a>
                    </Link>
                </StyledTagBlockTitle>
            </StyledTagBlock>
        )
    }
}

TagBlock.propTypes = propTypes;

export default TagBlock;