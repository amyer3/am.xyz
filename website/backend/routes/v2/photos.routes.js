const fs = require('fs');
const path= require('path');

const PHOTOS_ROUTES_PREFIX = "/photos"
const DIR = path.resolve(__dirname, '../../public/photos');

/**
 * @route GET /i/
 * @description gets all images
 * @returns {"success": T/F, "count": N, [{/"geo": location of phoot/, "loc": complete url to photo}]}
 * @access Public
 * @todo add in some type of validation
 */
const get_photos_list = function (fastify, opts, done) {
    fastify.route({
        method: 'GET',
        url: PHOTOS_ROUTES_PREFIX + '/list',
        schema: {
            querystring: {
                name: { type: 'string' },
                excitement: { type: 'integer' }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        success: { type: 'string' },
                        count: { type: "integer" },
                        list: { type: 'array' }
                    }
                }
            }, 500: {
                type: 'object',
                properties: {
                    success: {type:"boolean"}
                }
            }
        },
        handler: async function (request, reply, done) {
            //const fl = await fs.readdir(DIR, (err, files) => {})
            var fileList = fs.readdirSync(DIR)
                .map((v, i) => { 
                return 'http://www.am.xyz/photos/'+v
            })
            console.log(fileList)
            reply.send({
                success: true,
                count: fileList.length,
                list: fileList
            })
        }
    })
    done()
}

module.exports = get_photos_list
