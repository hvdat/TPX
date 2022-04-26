const {users} =require("../../models")
exports.list = async (offset = 0, limit = 9) => {
  return await users.findAndCountAll({ raw: true, offset, limit});
};
