const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Financials extends Model {}

Financials.init(
  {
    id: {
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
    offer_amt: {
    type: DataTypes.DECIMAL
    },
    prop_value: {
    type: DataTypes.DECIMAL
    },
    closing_amt: {
    type: DataTypes.DECIMAL
    },
    notes: {
      type: DataTypes.TEXT
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'financials'
  }
);

module.exports = Financials;