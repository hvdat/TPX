const profileService = require("./profileService");
exports.profileShow = (req, res, next) => {
    if (req.user) res.render("profile");
    else res.redirect("/login");
};

exports.updatePassword = async function (req, res) {
    const updated = await profileService.updatePassword(req.user.user_id, req.body.old_pass, req.body.new_pass);
    if (updated) res.sendStatus(200);
    else res.sendStatus(400);
};

exports.updateProfile = async function (req, res) {
    const user_id = req.user.user_id;
    const update = await profileService.updateProfile(user_id, req.body.name, req.body.tel, req.body.address, req.body.email);
    res.sendStatus(200);
};

exports.getInfo = async function (req, res) {
    const user_id = req.user.user_id;
    const user = await profileService.getInfo(user_id);
    res.json(user);
}