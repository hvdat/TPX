const { products } = require("..");
exports.list = async (offset = 0, limit = 9) => {
  return await products.findAndCountAll({ raw: true, offset, limit});
};
