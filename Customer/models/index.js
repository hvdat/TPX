const db_url = process.env.DATABASE_URL;
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(db_url);
const initModels = require("./init-models");

module.exports = initModels(sequelize);
