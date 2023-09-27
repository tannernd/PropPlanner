const sequelize = require('../config/connection');
const { Expenses, Financials, Income, Market, Mortgage, Property, Users } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  process.exit(0);
};

seedDatabase();
