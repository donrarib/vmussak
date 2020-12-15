const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_NAME || 'vmussak', // database
  process.env.DATABASE_USER || 'rails',   // user
  process.env.DATABASE_PASS || 'rails',   // pass
  {
      host: process.env.DATABASE_HOST || 'localhost',
      dialect: 'postgres',
      quoteIdentifiers: false,
      operatorsAliases: false
  }
);

module.exports = sequelize;
