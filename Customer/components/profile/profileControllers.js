const profileService = require("./profileService");
const cartService = require("../cart/cartService");

exports.profileShow = async (req, res, next) => {
    if (req.user) {
        const order = await cartService.showAllUserOrders(req.user.user_id);
        for (let i = 0; i < order.length; i++) {
            const status = order[i].status;
            if (status === 0) {
                order[i].status = "Chờ xử lí";
            } else if (status === 1) {
                order[i].status = "Đang giao";
            } else if (status === 2) {
                order[i].status = "Đã giao";
            }
        }
        res.render("profile", {order});
    } else res.redirect("/login");
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