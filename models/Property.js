const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Property extends Model {}

Property.init(
  {
    prop_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    prop_name: {
      type: DataTypes.STRING
    },
    prop_desc: {
      type: DataTypes.STRING
    },
    prop_type: {
      type: DataTypes.STRING
    },
    prop_address1: {
      type: DataTypes.STRING
    },
    prop_address2: {
      type: DataTypes.STRING
    },
    prop_city: {
      type: DataTypes.STRING
    },
    prop_state: {
      type: DataTypes.STRING
    },
    prop_zip: {
      type: DataTypes.STRING
    },
    prop_year: {
      type: DataTypes.INTEGER
    },
    prop_status: {
      type: DataTypes.INTEGER
    },
    prop_totalunits: {
      type: DataTypes.INTEGER
    },
    prop_purchase_date: {
      type: DataTypes.DATE
    },
    prop_sell_date: {
      type: DataTypes.DATE
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'property'
  }
);

module.exports = Property;
