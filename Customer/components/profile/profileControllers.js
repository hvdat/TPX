const profileService = require("./profileService");
exports.profileShow = (req, res, next) => {
  if (req.user) res.render("profile");
  else res.redirect("/login");
};
exports.updateAvatar = async function (req, res) {
  await profileService.updateAvatar(req.body.username, req.body.avtUrl);

  res.redirect("/profile");
};
