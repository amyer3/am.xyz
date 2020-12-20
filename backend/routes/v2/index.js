const auth_routes = require('./auth.routes')
const data_routes = require('./data.routes')
const log_routes = require('./logs.routes')
const photo_routes = require('./photos.routes')
const posts_routes = require('./posts.routes')
const tracker_routes = require('./tracker.routes')
const ssr_routes = require('./ssr.routes')
//const users_routes = require('./users.routes')



module.exports = [
    photo_routes, 
    tracker_routes
]