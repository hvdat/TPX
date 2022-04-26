const { admin } = require("../../models");
const bcrypt = require("bcryptjs");

exports.register = function (username, password, email, tel) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return admin.create({
    username: username,
    password: hash,
    email: email,
    tel: tel,
  });
};

exports.checkUsername=async function(username){
  return user = await admin.findOne({ where: { username: username }, raw: true });
};

exports.checkMail=async function(email){
  return user = await admin.findOne({ where: { email: email }, raw: true });
};

exports.checkTel=async function(tel){
  return user = await admin.findOne({ where: { tel: tel }, raw: true });
};

exports.verify = async function (email, password) {
  const user = await admin.findOne({ where: { email: email }, raw: true });
  if (!user) {
    return false;
  }
  if (bcrypt.compareSync(password, user.password)) return user;
  return false;
};
