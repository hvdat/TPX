const authenticationService = require("./authenticationService");

exports.registerShow = (req, res, next) => {
  res.render("authentication/register");
};

exports.register = async function (req, res) {
  const {username,password,email,tel}=req.body;
  const usern=await authenticationService.checkUsername(username);
  const usertel=await authenticationService.checkTel(tel);
  const useremail=await authenticationService.checkMail(email);
  if (usern) {
    res.render("authentication/register",{title:'register',error:"Username already exist!",});
    return;
  }
  if (useremail) {
    res.render("authentication/register",{title:'register',error:"Email already exist!",});
    return;
  }
  if (usertel) {
    res.render("authentication/register",{title:'register',error:"Phone Number already exist!",});
    return;
  }
  await authenticationService.register(
    username,
    password,
    email,
    tel,
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
