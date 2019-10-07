import React from 'react';
import { useRouter } from 'next/router'
import Tag from '../../components/tag/Tag'

const TagPage = () => {
    const router = useRouter()
    const { id } = router.query
    console.log('TagPage', id)

    return (
        <div>
            <Tag id={id}/>
        </div>
    );
};

export default TagPage;