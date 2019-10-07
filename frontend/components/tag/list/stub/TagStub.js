import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import StyledTagStub from './styles/StyledTagStub';
import StyledTagStubTitle from './styles/StyledTagStubTitle';

const propTypes = {
    tag: PropTypes.object.isRequired
}

class TagStub extends Component {
    render() {
        const { tag } = this.props 
        return (
            <StyledTagStub>
                <StyledTagStubTitle>
                    <Link href="/tag/[id]" as={`/tag/${tag.id}`}>
                        <a>{tag.label}</a>
                    </Link>
                </StyledTagStubTitle>
            </StyledTagStub>
        )
    }
}

TagStub.propTypes = propTypes;

export default TagStub;