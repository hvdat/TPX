const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("mysql://root:admin@127.0.0.1/thuc-pham-xanh");
const initModels = require("./init-models");

module.exports = initModels(sequelize);
