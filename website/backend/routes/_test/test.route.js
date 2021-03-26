// <img src="data:img/png;base64, http://localhost:3001/api/t/px"/>



const PIXEL = 'R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAI=';


    /**
    * @route GET /i/
    * @description gets all images
    * @returns {"success": T/F, "count": N, [{/"geo": location of phoot/, "loc": complete url to photo}]}
    * @access Public
    * @todo add in some type of validation
    */
 default_opts = {
        method: 'GET',
        url: '/t/px',
        handler: function (request, reply) {
            reply.send(PIXEL)
        }
    },

module.exports = function (fastify, opts, done) {
     fastify.route(default_opts)
     done()
}