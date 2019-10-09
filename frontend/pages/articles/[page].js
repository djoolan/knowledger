import React from 'react';
import { useRouter } from 'next/router'
import Articles from '../../components/article/list/Articles'

const ArticlesFeedPage = () => {
    const router = useRouter()
    const { query, pathname, asPath } = router
    console.log('router', {query, pathname, asPath})
    const { page } = router.query

    return (
        <div>
            <Articles page={page}/>
        </div>
    );
};

export default ArticlesFeedPage;