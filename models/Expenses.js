const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Expenses extends Model {}

Expenses.init(
  {
    exp_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    prop_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'property',
          key: 'prop_id',
        },
    },
    expense_amt: {
    type: DataTypes.DECIMAL
    },
    expense_desc: {
      type: DataTypes.STRING
    },
    expense_other_desc: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'expenses'
  }
);

module.exports = Expenses;
