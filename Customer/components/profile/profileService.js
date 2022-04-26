const {users} = require("../../models");
const {order} = require("../../models");
const {getInfo} = require("./profileControllers");
const bcrypt = require("bcryptjs");

exports.updateProfile = async (id, name, tel, address) => {
    await users.update({name: name, tel: tel, address: address}, {where: {id: id}});
}

exports.getInfo = async (id) => {
    const user = await users.findOne({
        where: {
            id: id
        }, raw: true,
        attributes: ['name', 'email', 'avatar', 'tel', 'address']
    });
    if (!user) return false;
    else return user;
}

exports.updatePassword = async (id, old_pass, new_pass) => {
    const user = await users.findOne({
        where: {
            id: id
        }, raw: true,
        attributes: ['password']
    });
    if (!user) return false;
    else {
        if (bcrypt.compareSync(old_pass, user.password)) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(new_pass, salt);
            await users.update({password: hash}, {where: {id: id}});
            return true;
        } else return false;
    }
}
