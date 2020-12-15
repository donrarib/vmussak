const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'vmussak', // database
  'rails',   // user
  'rails',   // pass
  {
      host: 'localhost',
      dialect: 'postgres',
      quoteIdentifiers: false,
      operatorsAliases: false
  }
);

module.exports = sequelize;
