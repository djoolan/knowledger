const { forwardTo } = require('prisma-binding')

const tags = forwardTo('db')

async function tag(parent, args, ctx, info) {
    const tag = await ctx.db.query.tag({ where: { id: args.id }})
    return tag
}

async function tagsWithCount(parent, args, ctx, info) {
    const tags = await ctx.prisma.tags()
    // const tags = await ctx.db.query.tags()
    // tags.forEach(tag => console.log(tag))
    const tagsWithCount = await Promise.all(tags.map(async tag => {
        const count = await ctx.prisma
            .articlesConnection()
            .aggregate()
            .count()
        return {
            tag,
            count,
        }
    }))
    return tagsWithCount
}

module.exports = {
    tags,
    tagsWithCount,
    tag
}