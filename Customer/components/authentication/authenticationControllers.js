const authenticationService = require("./authenticationService");

exports.registerShow = (req, res, next) => {
  res.render("authentication/register");
};

exports.register = async function (req, res) {
  const { email, password } = req.body;
  const user = await authenticationService.isUsertExist(email);
  if (user) {
    res.render("authentication/register", {
      title: "Register",
      error: "Email already exists",
    });
  }
  await authenticationService.register(
    req.body.username,
    password,
    email,
    req.body.tel
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

exports.checkEmailExist = async function (req, res) {
  const user = await authenticationService.isUsertExist(req.params.email);
  res.json(!!user);
};
