const sequelize = require('../config/connection');
const { Expeses, Financials, Income, Market, Mortgage, Property, Users } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  process.exit(0);
};

seedDatabase();
