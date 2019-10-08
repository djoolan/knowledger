async function createOrConnectTagsFromLabels(labels, ctx) {
    const create = []
    const connect = []
    await Promise.all(labels.map(async label => {
        const tagExists = await ctx.prisma.$exists.tag({ label })
        if (tagExists) {
            connect.push({ label })
            return
        }
        create.push({ label })
    }))
    return { 
        create,
        connect,
    }
}

async function createArticle(parent, args, ctx, info) {
    const { tags, ...props } = args
    
    const labels = tags.split(',')
    const tagsFromLabels = await createOrConnectTagsFromLabels(labels, ctx)
    const article = await ctx.db.mutation.createArticle({
        data: {
            ...props,
            tags: tagsFromLabels,
        }
    }, info)
    return article
}

async function updateArticle(parent, args, ctx, info) {
    const { id, tags, ...props } = args
    const labels = tags.split(',')
    const tagsFromLabels = await createOrConnectTagsFromLabels(labels, ctx)
    const article = await ctx.db.mutation.updateArticle({
        data: {
            ...props,
            tags: tagsFromLabels,
        },
        where: {
            id,
        }
    }, info)
    return article
}

module.exports = {
    createArticle,
    updateArticle,
}