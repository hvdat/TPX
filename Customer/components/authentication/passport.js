var passport = require("passport");
var LocalStrategy = require("passport-local");
const authenticationService = require("./authenticationService");

passport.use(
  new LocalStrategy({ usernameField: "email" }, async function verify(
    email,
    password,
    cb
  ) {
    const user = await authenticationService.verify(email, password);
    if (user) {
      return cb(null, user);
    }
    return cb(null, false);
  })
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { username: user.username, avt: user.avatar });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

module.exports = passport;
