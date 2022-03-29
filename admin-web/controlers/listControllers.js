const {list} = require('../models/services/productServices');
exports.list = async (req, res, next) => {
    const products = await list();
    res.render("list", {products});
};