async function createCategory(parent, args, ctx, info) {
    console.log('createCategory')
    const { label } = args
    const categoryExists = await ctx.prisma.$exists.category({ label })
    if (categoryExists) {
        throw new Error(`Existing category with this label: ${label}`)
    }
    const category = await ctx.db.mutation.createCategory({
        data: {
            ...args
        }
    }, info)
    return category
}

async function updateCategory(parent, args, ctx, info) {
    const { id, ...props } = args
    const category = await ctx.db.mutation.updateCategory({
        data: {
            ...props
        },
        where: {
            id
        }
    }, info)
    return category
}

async function deleteCategory(parent, args, ctx, info) {
    const { id } = args
    const category = await ctx.db.mutation.deleteCategory({ where: { id } }, info)
    return category
}

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
}