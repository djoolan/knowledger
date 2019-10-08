import React from 'react';
import { useRouter } from 'next/router'
import Article from '../../components/article/Article'

const ArticlePage = () => {
    const router = useRouter()
    const { id } = router.query
    // console.log('ArticlePage', id)

    return (
        <div>
            <Article id={id}/>
        </div>
    );
};

export default ArticlePage;