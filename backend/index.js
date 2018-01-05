'use strict';

const Hapi        = require('hapi');
const Config      = require('config');
const HapiAuthJWT = require('hapi-auth-jwt2');
const HapiPino    = require('hapi-pino');
const Nes         = require('nes');

const Routes      = require('./lib/routes/');
const Token       = require('./lib/services/token');
const Push        = require('./lib/controllers/push_controller');

// Create a server with a host and port
const server = new Hapi.Server({
  port: Config.get('api.port'),
  routes: { cors: Config.get('api.cors') }
});

const init = async () => {

  // Register plugins
  await server.register([HapiAuthJWT, HapiPino, Nes, Push]);

  // Auth setup
  // server.auth.strategy('jwt', 'jwt',{
  //   key: Config.get('token.secret'),
  //   validate: Token.validate,
  //   verifyOptions: { algorithms: ['HS256'] }
  // });
  // server.auth.default('jwt');

  // Routes
  server.route(Routes);

  // Pub sub setup
  server.subscription('/movieDetails');

  await server.start();
  // setInterval(() => server.publish('/movieDetails', { foo: 'bar' }), 1000);
  return server;
};

init()
  .catch((err) => console.error(err));

module.exports = server;
