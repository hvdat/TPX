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
      unique: "username_UNIQUE"
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
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "username_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
      {
        name: "email_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "tel_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tel" },
        ]
      },
    ]
  });
};
