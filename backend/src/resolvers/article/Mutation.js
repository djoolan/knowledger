async function getArticleTagRelations(articleId, tags, ctx) {
    console.log('getArticleTagRelations', {articleId, tags})
    if (!tags) {
        return
    }
    const tagLabels = typeof tags === 'string'
        ? tags.split(',')
        : tags.map(t => t.label)
    return getArticleTagRelationsFromLabels(articleId, tagLabels, ctx)
}

async function getArticleTagRelationsFromLabels(articleId, labels, ctx) {
    const tags = {
        create: [],
        connect: [],
        disconnect: [],
    }
    console.log('getArticleTagRelationsFromLabels: articleId', articleId)
    // let t = new Date()
    // tags.disconnect = (await ctx.prisma.tags()).map(tag => tag.label)
    if (articleId) {
        tags.disconnect = (await ctx.prisma.article({ id: articleId }).tags()).map(tag => ({ label: tag.label }))
    }
    await Promise.all(labels.map(async label => {
        if (!label) {
            return
        }
        tags.disconnect = tags.disconnect.filter(tag => tag.label !== label)
        const tagExists = await ctx.prisma.$exists.tag({ label })
        if (tagExists) {
            tags.connect.push({ label })
            return
        }
        tags.create.push({ label })
    }))
    console.log('final tags : ', tags)
    return { tags }
}

function normalizeArticleData(args) {
    const { __id, __typename, ...props } = args
    return props
    // const { title, uri, summary, takeaway, source, author, image } = args
    // return { title, uri, summary, takeaway, source, author, image }
}

async function createArticle(parent, args, ctx, info) {
    console.log('createArticle')
    const { tags, ...props } = args
    const data = {
        ...normalizeArticleData(props),
        ...await getArticleTagRelations(null, tags, ctx)
    }
    console.log('data', data)
    const article = await ctx.db.mutation.createArticle({ data }, info)
    return article
}

async function updateArticle(parent, args, ctx, info) {
    console.log('args', args)
    const { id, tags, ...props } = args
    const currentArticle = await ctx.prisma.article({ id })
    if (!currentArticle) {
        throw `Article not found for id #${id}`
    }
    console.log('updateArticle : currentArticle', currentArticle)
    const data = {
        ...normalizeArticleData(props),
        ...await getArticleTagRelations(id, tags, ctx)
    }
    console.log('data.tags', data.tags)
    const article = await ctx.db.mutation.updateArticle(
        { data, where: { id } }, 
        info,
    )
    return article
}

async function deleteArticle(parent, args, ctx, info) {
    const { id } = args
    const article = await ctx.db.mutation.deleteArticle({ where: { id } }, info)
    return article
}

async function importArticles(parent, args, ctx, info) {
    const { json } = args
    const jsonParsed = JSON.parse(json)
    console.log('importArticles', json, jsonParsed)
    const articles = await Promise.all(jsonParsed.map(async jsonArticle => {
        console.log('jsonArticle', jsonArticle)
        jsonArticle.tags = ''
        return createArticle(parent, jsonArticle, ctx, info)
    }))
    return articles
}

module.exports = {
    createArticle,
    updateArticle,
    importArticles,
    deleteArticle,
}