// <img src="data:img/png;base64, http://localhost:3001/api/t/px"/>

const PIXEL = 'R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAI=';
 
const send_tracker_pixel = function (fastify, opts, done) {
    fastify.route({
        method: 'GET',
        url: '/t/px',
        response: {
            200: {
                type: "string"
            }
        }
        ,
        handler: function (request, reply) {
            console.log(request)
            reply.send(PIXEL)
        }
    })
    done()
}


module.exports = send_tracker_pixel