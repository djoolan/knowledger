const { forwardTo } = require('prisma-binding')

const articles = forwardTo('db')

async function article(parent, args, ctx, info) {
    const article = await ctx.db.query.article({ where: { id: args.id }})
    return article
}

module.exports = {
    articles,
    article,
}