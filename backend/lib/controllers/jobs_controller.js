'use strict';

const { publishJob } = require('../services/redis_service');

class JobsController {

  create(request, h) {

    publishJob(request.params.job, JSON.stringify(request.payload));
    return {};
  }

}

module.exports = new JobsController();
