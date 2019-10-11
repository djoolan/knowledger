export const ARTICLE = {
    id: 1, 
    title: 'Title',
    uri: 'http://www.google.com',
    summary: 'Summary',
    source: 'Source',
    author: 'Author',
    isRead: true,
    tags: [
        {
            id: 1,
            label: 'JavaScript'
        },
    ],
    categories: [
        {
            id: 1,
            label: 'Programming',
        },
    ],
}

// export const ARTICLE_BLANK = () => ({
//     ...(Object.keys(ARTICLE).map(k => ({ [k]: null }))),
// })
export const ARTICLE_BLANK = () => ({
})

export const ARTICLE_INPUT = (article = ARTICLE) => ({
    ...article,
    tags: article.tags.map(item => item.label).join(','),
    categories: article.categories.map(item => item.label).join(','),
    tagsArray: article.tags,
    categoriesArray: article.categories,
})

export const ARTICLE_CREATE_INPUT = (article = ARTICLE) => {
    const { id, ...articleWithoutId } = ARTICLE_INPUT(article)
    return {
        ...articleWithoutId,
        image: '',
        takeaway: '',
        readStatus: null,
    }
}

export const ARTICLE_OUTPUT = (article = ARTICLE) => ({ 
    ...ARTICLE_INPUT(article),
    tags: [ ...ARTICLE_INPUT(article).tagsArray ],
    categories: [ ...ARTICLE_INPUT(article).categoriesArray ],
})