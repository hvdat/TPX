const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("mysql://u8ao5ymivydbzh0z:Uoajd0P5Px2A4U0QQGWW@bb76zmr3niir5g6jctnb-mysql.services.clever-cloud.com/bb76zmr3niir5g6jctnb");
const initModels = require("./init-models");

module.exports = initModels(sequelize);
