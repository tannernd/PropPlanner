const Users = require('./Users');
const Expenses = require('./Expenses');
const Financials = require('./Financials');
const Income = require('./Income');
const Market = require('./Market');
const Mortgage = require('./Mortgage');
const Property = require('./Property');

Property.hasMany(Users, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Users.belongsTo(Property, {
  foreignKey: 'user_id',
});

Mortgage.hasMany(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
Users.belongsTo(Mortgage, {
foreignKey: 'user_id',
});

Market.hasMany(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
Users.belongsTo(Market, {
foreignKey: 'user_id',
});

Income.hasMany(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
Users.belongsTo(Income, {
foreignKey: 'user_id',
});

Financials.hasMany(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
Users.belongsTo(Financials, {
foreignKey: 'user_id',
});

Expenses.hasMany(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
Users.belongsTo(Expenses, {
foreignKey: 'user_id',
});

Property.hasMany(Mortgage, {
    foreignKey: 'prop_id',
    onDelete: 'CASCADE',
  });
  
Mortgage.belongsTo(Property, {
foreignKey: 'prop_id',
});

Property.hasMany(Market, {
    foreignKey: 'prop_id',
    onDelete: 'CASCADE',
  });
  
Market.belongsTo(Property, {
foreignKey: 'prop_id',
});

Property.hasMany(Income, {
    foreignKey: 'prop_id',
    onDelete: 'CASCADE',
  });
  
Income.belongsTo(Property, {
foreignKey: 'prop_id',
});

Property.hasMany(Financials, {
    foreignKey: 'prop_id',
    onDelete: 'CASCADE',
  });
  
Financials.belongsTo(Financials, {
foreignKey: 'prop_id',
});

Property.hasMany(Expenses, {
    foreignKey: 'prop_id',
    onDelete: 'CASCADE',
  });
  
Expenses.belongsTo(Property, {
foreignKey: 'prop_id',
});

module.exports = { Users, Expenses, Financials, Income, Market, Mortgage, Property };
