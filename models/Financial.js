const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Financial extends Model { }

Financial.init(
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
    offer_amount: {
      type: DataTypes.DECIMAL
    },
    property_value: {
      type: DataTypes.DECIMAL
    },
    closing_amount: {
      type: DataTypes.DECIMAL
    },
    notes: {
      type: DataTypes.TEXT
    }
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'financial'
  }
);

module.exports = Financial;