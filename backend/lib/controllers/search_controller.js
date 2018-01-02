'use strict';

const { findByTitle } = require('../services/es_service');

class SearchController {

  create(request, h) {

    return findByTitle(request.payload.title);
  }

}

module.exports = new SearchController();
