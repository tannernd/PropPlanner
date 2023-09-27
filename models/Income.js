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
