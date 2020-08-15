// <img src="data:img/png;base64, http://localhost:3001/api/t/px"/>

const PIXEL = 'R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAI=';
 
const send_tracker_pixel = function (fastify, opts, done) {
    fastify.route({
        method: 'GET',
        url: '/t/px',
        handler: function (request, reply) {
            reply.send(PIXEL)
        }
    })
    done()
}


module.exports = send_tracker_pixel