const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Property extends Model { }

Property.init(
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
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    address1: {
      type: DataTypes.STRING
    },
    address2: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zip: {
      type: DataTypes.STRING
    },
    year: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.INTEGER
    },
    total_units: {
      type: DataTypes.INTEGER
    },
    purchase_date: {
      type: DataTypes.DATE
    },
    sell_date: {
      type: DataTypes.DATE
    }
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'property'
  }
);

module.exports = Property;