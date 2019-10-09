import React from 'react';
import { useRouter } from 'next/router'
import Category from '../../components/category/Category'

const CategoryPage = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            <Category id={id}/>
        </div>
    );
};

export default CategoryPage;