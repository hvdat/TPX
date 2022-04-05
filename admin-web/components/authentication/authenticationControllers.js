const authenticationService = require("./authenticationService");

exports.registerShow = (req, res, next) => {
  res.render("authentication/register");
};

exports.register = async function (req, res) {
  await authenticationService.register(
    req.body.username,
    req.body.password,
    req.body.email
  );

  res.redirect("/login");
};

exports.loginShow = (req, res, next) => {
  if (req.user) {
    res.redirect("/");
  } else {
    res.render("authentication/login");
  }
};
