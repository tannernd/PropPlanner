const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Expense extends Model { }

Expense.init(
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
    modelName: 'expense'
  }
);

module.exports = Expense;