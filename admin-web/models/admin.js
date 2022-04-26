const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(256),
      allowNull: true,
      unique: "new_tablecol_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: true,
      unique: "email_UNIQUE"
    },
    tel: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "tel_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'admin',
    timestamps: false
  });
};
