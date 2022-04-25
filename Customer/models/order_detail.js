const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_detail', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'order',
        key: 'id'
      }
    },
    products_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'order_detail',
    timestamps: false
  });
};
