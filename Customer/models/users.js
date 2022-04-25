const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    tel: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
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
        name: "email_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
