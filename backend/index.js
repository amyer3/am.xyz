const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

const DB_LOC = "~/Dropbox/";
const PATH_TO_RESOURCE = "Photos_xyz";
const TIMEOUT = 10800;

const API_PORT = 3001;
const app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", router);
app.use('/images', express.static(__dirname + "/photos/IMG_0814.jpg" ))
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
