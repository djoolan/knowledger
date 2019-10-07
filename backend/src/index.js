require('dotenv').config({
    path: 'variables.env'
})

const createServer = require('./createServer')
const db = require('./db')

const server = createServer()

server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL,
        },
    },
    response => {
        console.log(`Server started on http://localhost:${response.port}`)
    },
)