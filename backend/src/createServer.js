const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const ArticleQuery = require('./resolvers/article/Query')
const ArticleMutation = require('./resolvers/article/Mutation')
const Article = require('./resolvers/article/Article')
const TagQuery = require('./resolvers/tag/Query')
const TagMutation = require('./resolvers/tag/Mutation')
const CategoryQuery = require('./resolvers/category/Query')
const CategoryMutation = require('./resolvers/category/Mutation')
const db = require('./db')

function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Query: {
                ...ArticleQuery,
                ...TagQuery,
                ...CategoryQuery,
            },
            Mutation: {
                ...ArticleMutation,
                ...TagMutation,
                ...CategoryMutation,
            },
            Article,
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