const { forwardTo } = require('prisma-binding')

const articles = forwardTo('db')

async function article(parent, args, ctx, info) {
    const article = await ctx.prisma.article({ id: args.id })
    article.tags = await ctx.prisma.article({ id: args.id }).tags()
    return article
}

// const article = forwardTo('db')

module.exports = {
    articles,
    article,
}