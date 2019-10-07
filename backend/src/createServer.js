const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const ArticleQuery = require('./resolvers/article/Query')
const ArticleMutation = require('./resolvers/article/Mutation')
const TagQuery = require('./resolvers/tag/Query')
const TagMutation = require('./resolvers/tag/Mutation')
const db = require('./db')

function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Query: {
                ...ArticleQuery,
                ...TagQuery,
            },
            Mutation: {
                ...ArticleMutation,
                ...TagMutation,
            },
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        context: req => ({ 
            ...req, 
            prisma,
            db,
         })
})
}
module.exports = createServer