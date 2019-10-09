function tags(parent, args, ctx) {
    return ctx.prisma.article({ id: parent.id }).tags()
}

function categories(parent, args, ctx) {
    return ctx.prisma.article({ id: parent.id }).categories()
}

module.exports = {
    tags,
    categories,
}