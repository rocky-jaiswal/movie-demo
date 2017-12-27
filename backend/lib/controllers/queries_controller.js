'use strict';

const { findByTitle } = require('../services/es_service');

class QueriesController {

  async create(request, h) {
    return findByTitle(request.payload.title);
  }

}

module.exports = new QueriesController();
