const {list} = require('../models/services/productServices');

exports.list = async (req, res, next) => {
    const products = await list();
    res.render("product/shop", {products});
};
exports.details = async (req, res, next) => {
    res.render("product/single-product");
};
