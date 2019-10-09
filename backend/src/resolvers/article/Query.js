const { forwardTo } = require('prisma-binding')

const articles = forwardTo('db')

// async function articles(parent, args, ctx, info) {
//     const articles = await ctx.prisma.articles()
//     return articles
// }

async function articlesFeed(root, args, context, info) {
    const where = args.filter ? {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter },
        ],
    } : {}

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