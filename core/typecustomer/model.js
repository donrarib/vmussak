const Sequelize = require('sequelize');
const db = require('../../database/database');

const TypeCustomer = db.define(
  'type_customers',
  {
      id:{
        type: Sequelize.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true
      },

      description:{
        type: Sequelize.STRING,
        required: true
      }
  },


  // para tabelas preexistentes
  {
    tableName: 'type_customers',
    schema: 'public',
    freezeTableName: false,
    timestamps: false
  }
)

module.exports = TypeCustomer;
