var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

module.exports = [
    {
        method: 'GET',
        url: '/',
        schema: {
            querystring: {
                name: { type: 'string' },
                excitement: { type: 'integer' }
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        hello: { type: 'string' }
                    }
                }
            }
        },
        handler: function (request, reply) {
            reply.send({ hello: 'world' })
        }
    },
    {
        method: 'GET',
        url: '/login',
        schema: {
            //body:{},
            //querystring: {},
            //params:{},
            response: {
                200: {
                    type: 'object',
                    properties: {
                        hello: { type: 'string' }
                    }
                }
            }
        },
        handler: async function (request, reply) {
            reply.send({ hello: 'world' })
        },
        bodyLimit: 1048576,
    },
    {
        method: 'POST',
        url: '/register',
        schema: {
            querystring: {},
            response: {
                299: {
                    type: 'object',
                    properties: {
                        hello: { type: 'string' }
                    }
                }
            }
        },
        handler: async function (request, reply) {
            reply.send({ hello: "world" })
        }
    }
]
