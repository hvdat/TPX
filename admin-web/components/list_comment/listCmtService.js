const {comment} =require("../../models")
exports.list = async (offset = 0, limit = 9) => {
  return await comment.findAndCountAll({ raw: true, offset, limit});
};
