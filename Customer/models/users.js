const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "users",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(256),
        allowNull: true,
        unique: "name_UNIQUE",
      },
      password: {
        type: DataTypes.STRING(120),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(256),
        allowNull: true,
        unique: "email_UNIQUE",
      },
      tel: {
        type: DataTypes.STRING(10),
        allowNull: true,
        unique: "sdt_UNIQUE",
      },
      avatar: {
        type: DataTypes.STRING(2048),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "users",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "idusers_UNIQUE",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "name_UNIQUE",
          unique: true,
          using: "BTREE",
          fields: [{ name: "username" }],
        },
        {
          name: "email_UNIQUE",
          unique: true,
          using: "BTREE",
          fields: [{ name: "email" }],
        },
        {
          name: "sdt_UNIQUE",
          unique: true,
          using: "BTREE",
          fields: [{ name: "tel" }],
        },
      ],
    }
  );
};
