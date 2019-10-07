const Mutation = {
    async createArticle(parent, args, ctx, info) {
        const { tags, ...props } = args
        
        const labels = tags
            .split(',')
        //     // .map(t => t.trim())
            
        // const tagIds = await Promise.all(labels.map(async label => {
        //     const tagExists = await ctx.prisma.$exists.tag({ label })
        //     if (tagExists) {
        //         const tag = await ctx.db.query.tag({ label })
        //         return tag.id
        //         // console.log('Existing tag : ', tagExists)
        //         // return tagExists.data.id
        //     }
        //     const createdTag = await ctx.prisma.createTag({ label })
        //     console.log('Created tag : ', createdTag)
        //     return createdTag.id
        // }))
        // console.log(tagIds)
        // const article = await ctx.db.mutation.createArticle({
        //     data: {
        //         ...props
        //     }
        // }, info)
        const article = await ctx.prisma.createArticle({
            ...props
        })
        return article
    },

    async updateArticle(parent, args, ctx, info) {
        const { id, tags, ...props } = args
        const article = await ctx.db.mutation.updateArticle({
            data: {
                ...props
            },
            where: {
                id
            }
        }, info)
        return article
    },

    async createTag(parent, args, ctx, info) {
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
    },

    async updateTag(parent, args, ctx, info) {
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
    },
}

module.exports = Mutation
