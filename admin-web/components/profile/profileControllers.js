const profileService = require("./profileService");
exports.profileShow = (req, res, next) => {
  if (req.user) res.render("profile",);
  else res.redirect("/login");
};
exports.updateInfor = async function (req, res) {
  const {username,tel}=req.body;
  const usern=await profileService.checkUsername(username);
  const usertel=await profileService.checkTel(tel);
  if (usern) {
    res.render("profile",{title:'profile',error:"Username already exist!",});
    return;
  }
  else if (usertel) {
    res.render("profile",{title:'profile',error:"Phone number already exist!",});
    return;
  }

  await profileService.updateinfor(req.body.username, req.body.tel, req.body.id);
  res.render("profile",{title:'profile',noti:"Information Updated Successfully!",});

};
