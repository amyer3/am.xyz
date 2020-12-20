const fastify = require('fastify')({ logger: true })
const routes = require("./routes/v2")
const test_tracker = require('./routes/_test/test.route')


// var endpoints =routes.tracker_routes.forEach((v, i) => {
//     fastify.route(v)
// })

//fastify.register(endpoints, {prefix: "/api"})
routes.forEach((v, i) => {
    fastify.register(v, {prefix: "/api"})
})
//fastify.register(require('./routes/v2/index.js'), {prefix: "/test"})

const start = async () => {
    try {
        await fastify.listen(3001)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (error) {
        fastify.log.info(error)
        process.exit(1)
        
    }
}

start()