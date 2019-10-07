async function createTag(parent, args, ctx, info) {
    console.log('createTag')
    const { label } = args
    const tagExists = await ctx.prisma.$exists.tag({ label })
    if (tagExists) {
        throw new Error(`Existing tag with this label: ${label}`)
    }
    const tag = await ctx.db.mutation.createTag({
        data: {
            ...args
        }
    }, info)
    return tag
}

async function updateTag(parent, args, ctx, info) {
    const { id, ...props } = args
    const tag = await ctx.db.mutation.updateTag({
        data: {
            ...props
        },
        where: {
            id
        }
    }, info)
    return tag
}

module.exports = {
    createTag,
    updateTag,
}