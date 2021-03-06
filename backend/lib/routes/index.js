'use strict';

const PingController   = require('../controllers/ping_controller');
const SearchController = require('../controllers/search_controller');
const JobsController   = require('../controllers/jobs_controller');

const Routes = [
  { method: 'GET',   path: '/ping',       options: { auth: false }, handler: PingController.show },
  { method: 'POST',  path: '/search',     options: { auth: false }, handler: SearchController.create },
  { method: 'POST',  path: '/jobs/{job}', options: { auth: false }, handler: JobsController.create }
];

module.exports = Routes;
