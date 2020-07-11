const express = require('express')
const router = express.Router()
const aws = require('aws-sdk')
const fs = require('fs');

/**
 * @route GET /i/
 * @description gets all images
 * @returns {"success": T/F, "count": N, [{/"geo": location of phoot/, "loc": complete url to photo}]}
 * @access Public
 * @todo add in some type of validation
 */

const PIXEL = 'R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAI=';

router.get('/px', (req, res) => {
    const data = 0
    console.log(req)
    res.status(200)
        .end(PIXEL)
})

module.exports = router