'use strict';

const { findByTitle } = require('../services/es_service');

class SearchController {

  async create(request, h) {

    const esData = await findByTitle(request.payload.title);
    return esData.hits.hits.map((rec) => rec['_source']);
  }

}

module.exports = new SearchController();
