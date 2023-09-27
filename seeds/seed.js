const sequelize = require('../config/connection');
const { Expense, Financial, Income, Market, Mortgage, Property, User } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  process.exit(0);
};

seedDatabase();