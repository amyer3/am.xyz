const express = require('express')
const router = express.Router()
const db = require('../data/connections/tracker-memory.js')
const fs = require('fs');

// <img src="data:img/png;base64, http://localhost:3001/api/t/px"/>

/**
 * @route GET /i/
 * @description gets all images
 * @returns {"success": T/F, "count": N, [{/"geo": location of phoot/, "loc": complete url to photo}]}
 * @access Public
 * @todo add in some type of validation
 */

const PIXEL = 'R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAI=';
const log_path = new db

router.get('/px', (req, res) => {
    
    const data = 0
    //console.log(req)
    res.status(200)
        .end(PIXEL)
})

module.exports = router