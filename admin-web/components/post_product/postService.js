const { products } = require("../../models");

exports.prod_post = function (name, price, img_url, category) {
  return products.create({
    name: name,
    price: price,
    img: img_url,
    category: category,
  });
};

