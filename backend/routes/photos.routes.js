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

const dir = './public/photos';

router.get('/list', (req, res) => {
    fs.readdir(dir, (err, files) => {
      console.log(files)
      var fl = files.map(l => ({'loc': 'http://localhost:3001/resource/photos/'+l}))
        res.status(200)
        .json({
          success: true, 
          count: files.length,
          list: fl
        
        })
      });
    
})

module.exports = router