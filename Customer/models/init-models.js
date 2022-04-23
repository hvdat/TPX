var DataTypes = require("sequelize").DataTypes;
var _category = require("./category");
var _products = require("./products");
var _users = require("./users");

function initModels(sequelize) {
  var category = _category(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  products.belongsTo(category, { as: "category_category", foreignKey: "category"});
  category.hasMany(products, { as: "products", foreignKey: "category"});

  return {
    category,
    products,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
