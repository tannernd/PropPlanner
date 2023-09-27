const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Income extends Model { }

Income.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    property_id: {
      type: DataTypes.INTEGER
    },
    income_amt: {
      type: DataTypes.DECIMAL
    },
    amount: {
      type: DataTypes.DECIMAL
    },
    description: {
      type: DataTypes.STRING
    },
    other_description: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'income'
  }
);

module.exports = Income;