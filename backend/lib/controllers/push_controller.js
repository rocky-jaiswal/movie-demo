'use strict';

let hapiServer = null;

module.exports = {
  plugin: {
    name: 'Push',
    register: (server, options) => {

      hapiServer = hapiServer || server;
    }
  },
  publishMovieDetails: (data) => {

    hapiServer.publish('/movieDetails', data);
  }
};
