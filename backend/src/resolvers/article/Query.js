const { forwardTo } = require('prisma-binding')

const articles = forwardTo('db')

// async function articles(parent, args, ctx, info) {
//     const articles = await ctx.prisma.articles()
//     return articles
// }

async function articlesFeed(root, args, context, info) {
    const where = {
        ...(args.search
            ? {
                OR: [
                    { title_contains: args.search },
                    { uri_contains: args.search },
                    { author_contains: args.search },
                    { source_contains: args.search },
                    { summary_contains: args.search },
                    { tags_some: { label_contains: args.search } },
                ],
            }
            : {}),
        ...(args.tags
            ? {
                tags_some: {
                    OR: args.tags.split(',').map(label => ({ label })),
                },
            }
            : {}
        ),
        ...(args.categories
            ? {
                categories_some: {
                    OR: args.categories.split(',').map(label => ({ label })),
                },
            }
            : {}
        ),
    }
    
    const count = (await context.prisma.articles({
        where,
    })).length

    const articles = await context.prisma.articles({
        where,
        skip: args.skip,
        first: args.first,
        orderBy: args.orderBy,
    })

    return {
        articles,
        count
    }
}

async function article(parent, args, ctx, info) {
    const article = await ctx.prisma.article({ id: args.id })
    article.tags = await ctx.prisma.article({ id: args.id }).tags()
    article.categories = await ctx.prisma.article({ id: args.id }).categories()
    return article
}

// const article = forwardTo('db')

module.exports = {
    articles,
    articlesFeed,
    article,
}