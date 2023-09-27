const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mortgage extends Model {}

Mortgage.init(
  {
    mort_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
    type: DataTypes.INTEGER
    },
    prop_id: {
    type: DataTypes.INTEGER
    },
    loan_amt: {
    type: DataTypes.DECIMAL
    },
    rate: {
    type: DataTypes.DECIMAL
    },
    term: {
    type: DataTypes.DECIMAL
    },
    payment: {
    type: DataTypes.DECIMAL
    },
    lender: {
    type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'mortgage'
  }
);

module.exports = Mortgage;
