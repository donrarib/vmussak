const controller = require('./controller');

module.exports = (app) => {
  app.get('/typeCustomers', controller.getAll);
}
