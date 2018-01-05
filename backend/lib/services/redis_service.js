'use strict';

const NRP = require('node-redis-pubsub');

const PushController = require('../controllers/push_controller');
const { fetchTMDBDetails } = require('./tmdb_service');

const Client = new NRP({
  host: 'redis',
  port  : 6379 ,
  scope : 'demo'
});

// TODO: Are connections properly closed?
const publishJob = (queue, data) => Client.emit(queue, data);

Client.on('movieDetails', (data) => {

  fetchTMDBDetails(JSON.parse(data).movieData).then((res) => {

    const movieData = res.map((r) => r.data);
    PushController.publishMovieDetails(movieData);
  });
});

module.exports = {
  publishJob
};
