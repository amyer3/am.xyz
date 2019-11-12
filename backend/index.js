const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan')


const logs = require("./routes/logs.routes")
const images = require("./routes/photos.routes")
const maps = require('./routes/maps.routes')

const API_PORT = 3001;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'))

/**
 * app uses /api/prefix then routes to images to find specific resource requested
 * @example /api/i/count => api/i routes to images, then images calls /count to return data
 */
app.use('/api/i', images)
app.use('/api/l', logs)
app.use('/api/m', maps)
app.use('/resource/', express.static(__dirname+'/public'))
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
