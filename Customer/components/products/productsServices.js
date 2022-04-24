const {products} = require("../../models");
const {category} = require("../../models");
exports.list = async (offset = 0, limit = 9) => {
    return await products.findAndCountAll({raw: true, offset, limit});
};
exports.categoryProductList = async (categoryID, offset = 0, limit = 9) => {
    return await products.findAndCountAll({
        raw: true,
        where: {
            category: categoryID
        },
        attributes: ['id', 'name', 'price', 'img'],
        offset,
        limit
    });
};

exports.categoryName = async () => {
    return await category.findAll({
        raw: true,
        attributes: ['id', 'name']
    });
};

exports.singleProduct = async (id) => {
    return await products.findOne({
        raw: true,
        where: {
            id: id
        }
    });
};