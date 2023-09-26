const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Income extends Model {}

Income.init(
  {
    inc_id: {
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
    income_amt: {
    type: DataTypes.DECIMAL
    },
    income_desc: {
      type: DataTypes.STRING
    },
    income_other_desc: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'income'
  }
);

module.exports = Income;
