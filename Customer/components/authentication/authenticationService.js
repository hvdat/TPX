const { users } = require("../../models");
const bcrypt = require("bcryptjs");

exports.register = function (username, password, email, tel) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return users.create({
    username: username,
    password: hash,
    email: email,
    tel: tel,
  });
};

exports.isUsertExist = function (email) {
  return users.findOne({ where: { email: email }, raw: true });
};

exports.verify = async function (email, password) {
  const user = await users.findOne({ where: { email: email }, raw: true });
  if (!user) {
    return false;
  }
  if (bcrypt.compareSync(password, user.password)) return user;
  return false;
};
