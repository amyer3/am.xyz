const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const UserModel = require("./data-models/user-model");
const Keys = require('./config/keys')

const opts = {
  jwtFromRequest: ExtractJwt.fromHeader(),
  secretOrKey: Keys.secretOrKey
};

module.exports = {
  passport
}

function passport() {
  passport.use(
    new JWTStrategy(opts, (jwt_payload, done) => {
      UserModel.findById(jwt_payload.email)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
