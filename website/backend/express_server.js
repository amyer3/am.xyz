const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan')
const path = require('path')
const helmet = require('helmet')

//const logs = require("./routes/v1/logs.routes")
const images = require("./routes/v1/photos.routes")
//const tracker = require('./routes/v1/tracker.routes')
const ENUMS = require('./data/config/ENUMS')

const DB_CONN = require('./data/connections/controller')
DB_CONN.sync()

const API_PORT = 3001;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('combined'))

/**
 * app uses /api/prefix then routes to images to find specific resource requested
 * @example /api/i/count => api/i routes to images, then images calls /count to return data
 */
app.use(helmet())
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use('/api/i', images)
//app.use('/api/l', logs)
//app.use('/api/t', tracker)
app.use('/photos/', express.static(__dirname+'/public'))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../frontend/build/index.html')))
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT} at ${__dirname}`));
