const { list } = require("./productsServices");

exports.list = async (req, res, next) => {
  const products = await list();
  console.log(products);
  res.render("product/shop", { products });
};
exports.details = async (req, res, next) => {
  res.render("product/single-product");
};
