var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var express = require('express')
var router = express.Router()


router.post("/login", async (req, res) => { })

// may not be necessary if registering from script
// could return a 2xx message for consistency
router.post("/register", (req, res) => {res.status(299).end()})





module.exports = router