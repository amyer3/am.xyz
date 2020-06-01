const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys"); // Load input validation
const validateRegisterInput = require("../validators/registration");
const validateLoginInput = require("../validators/login");
const UserModel = require("../data-models/user-model");
const ROLES = require('../config/role.defs')

/** 
 * @route POST api/users/login
 * @desc Login user and return JWT token
 * @access Public
 * */
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body); // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  let Account = await UserModel.findOne({ email })
  // if user doesn't exist, return 404 w/ message
  // TODO Send different res.status? 5xx/4xx?
  if (!Account.user) { return res.status(404).json({ message: "Invalid Login", success: false }); }
  // Check password

  bcrypt.compare(password, user.password).then(isMatch => {
    if (isMatch) {
      // Make JWT && Send
      const payload = { email: user.email, role: user.role, UID: user._id }; // Sign token
      jwt.sign(payload, keys.secretOrKey, { expiresIn: 31556926 },
        (err, token) => {
          res.json({ success: true, token: "token " + token, firstName: user.firstName, UID: user._id });
        });
    } else {
      return res
        .status(400)
        .json({ invalidLogin: "Login Invalid" });
    }
  });
});

/**
 * @route POST api/users/register
 * @desc Register user
 * @access Public
 * @returns
 * @param {String} firstName
 * @param {String} lastName
 * @param {String} email
 * @param {String} password
 * @param {String} role
 * @param {String} phoneNumber
 * @param {String} address
 * @param {Number} company_id
 * */
router.post("/register", (req, res) => {
  // is the email a valid email?
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // TODO strip plus codes && periods from gmail address?
  // TODO if this is creating a new user as a brand admin AND a new brand, call brand creation w. req.body data

  // Does the email already exist? return 400 if true
  let userExists = await UserModel.findOne({ email: req.body.email })
  if (userExists) {
    return res.status(400).json({ success: false, message: "User already exists" });
  } else {
    const newUser = new UserModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phoneNumber,
      password: req.body.password,
      role: req.body.role,
      address: req.body.address,
      company: req.body.company_id
    });
    // Hash the password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) {
          return res.status(400).json({ success: false, error: `Hash error ${err}` });
        }
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  }
});

module.exports = router;
