const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mortgage extends Model { }

Mortgage.init(
  {
    id: {
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
    property_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'property',
        key: 'id',
      },
    },
    loan_amount: {
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
    underscored: true,
    modelName: 'mortgage'
  }
);

module.exports = Mortgage;
