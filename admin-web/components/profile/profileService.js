const { admin } = require("../../models");
exports.updateinfor = async function (username, tel,id) {
  await admin.update(
    {
      username: username,
      tel: tel
    },
    {
      where: {
        id: id,
      },
    }
  );
};
exports.checkTel=async function(tel){
  return user = await admin.findOne({ where: { tel: tel }, raw: true });
};
exports.checkUsername=async function(username){
  return user = await admin.findOne({ where: { username: username }, raw: true });
};
