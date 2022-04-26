var DataTypes = require("sequelize").DataTypes;
var _admin = require("./admin");
var _category = require("./category");
var _comment = require("./comment");
var _order = require("./order");
var _order_detail = require("./order_detail");
var _products = require("./products");
var _users = require("./users");

function initModels(sequelize) {
  var admin = _admin(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var comment = _comment(sequelize, DataTypes);
  var order = _order(sequelize, DataTypes);
  var order_detail = _order_detail(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  products.belongsTo(category, { as: "category_category", foreignKey: "category"});
  category.hasMany(products, { as: "products", foreignKey: "category"});
  comment.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(comment, { as: "comments", foreignKey: "product_id"});
  comment.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(comment, { as: "comments", foreignKey: "user_id"});

  return {
    admin,
    category,
    comment,
    order,
    order_detail,
    products,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
