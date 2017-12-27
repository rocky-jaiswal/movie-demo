'use strict';

const PingController   = require('../controllers/ping_controller');
const QueriesController = require('../controllers/queries_controller');

const Routes = [
  { method: 'GET',   path: '/ping',   options: { auth: false }, handler: PingController.show },
  { method: 'POST',  path: '/search', options: { auth: false }, handler: QueriesController.create }
];

module.exports = Routes;