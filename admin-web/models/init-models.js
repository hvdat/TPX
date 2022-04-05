var DataTypes = require("sequelize").DataTypes;
var _admin = require("./admin");
var _products = require("./products");
var _users = require("./users");

function initModels(sequelize) {
  var admin = _admin(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    admin,
    products,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
