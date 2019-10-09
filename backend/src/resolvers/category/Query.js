const { forwardTo } = require('prisma-binding')

const categories = forwardTo('db')

async function category(parent, args, ctx, info) {
    const category = await ctx.db.query.category({ where: { id: args.id }})
    return category
}

async function categoriesWithCount(parent, args, ctx, info) {
    const categories = await ctx.prisma.categories()
    // const categories = await ctx.db.query.categories()
    // categories.forEach(category => console.log(category))
    const categoriesWithCount = await Promise.all(categories.map(async category => {
        const count = await ctx.prisma
            .articlesConnection()
            .aggregate()
            .count()
        return {
            category,
            count,
        }
    }))
    return categoriesWithCount
}

module.exports = {
    categories,
    categoriesWithCount,
    category
}