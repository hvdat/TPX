const { admin } = require("../../models");
const bcrypt = require("bcryptjs");

exports.register = function (username, password, email) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return admin.create({
    username: username,
    password: hash,
    email: email,
  });
};

exports.verify = async function (email, password) {
  const user = await admin.findOne({ where: { email: email }, raw: true });
  if (!user) {
    return false;
  }
  if (bcrypt.compareSync(password, user.password)) return user;
  return false;
};
