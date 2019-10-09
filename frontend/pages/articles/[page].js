import React from 'react';
import { useRouter } from 'next/router'
import Articles from '../../components/article/list/Articles'

const ArticlesFeedPage = () => {
    const router = useRouter()
    const { query, pathname, asPath } = router
    console.log('router', {query, pathname, asPath})
    const { page, tags, categories, search } = router.query

    return (
        <div>
            <Articles 
                page={page}
                tags={tags}
                categories={categories}
                search={search}
            />
        </div>
    );
};

export default ArticlesFeedPage;