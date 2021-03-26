const ROUTES_PREFIX = "/data"


const data_routes = {
    routes: [
        {
            login: {
                method: 'GET',
                url: '/data',
                schema: {
                    //body:{},
                    //querystring: {},
                    //params:{},
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
            }
        }
    ]
}