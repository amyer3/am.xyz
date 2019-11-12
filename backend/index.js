const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan')
const path = require('path')
const helmet = require('helmet')

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
app.use(helmet())
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use('/api/i', images)
app.use('/api/l', logs)
app.use('/api/m', maps)
app.use('/resource/', express.static(__dirname+'/public'))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../frontend/build/index.html')))
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
