const { forwardTo } = require('prisma-binding')

const Query = {

    articles: forwardTo('db'),

    async article(parent, args, ctx, info) {
        const article = await ctx.db.query.article({ where: { id: args.id }})
        return article
    },

    tags: forwardTo('db'),

    async tag(parent, args, ctx, info) {
        const tag = await ctx.db.query.tag({ where: { id: args.id }})
        return tag
    },
}

module.exports = Query
