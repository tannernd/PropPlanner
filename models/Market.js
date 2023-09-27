const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Market extends Model { }

Market.init(
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
    appreciation: {
      type: DataTypes.DECIMAL
    },
    annual_rent_increase: {
      type: DataTypes.DECIMAL
    },
    annual_expense_increase: {
      type: DataTypes.DECIMAL
    },
    vacancy: {
      type: DataTypes.DECIMAL
    }
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'market'
  }
);

module.exports = Market;