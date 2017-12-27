'use strict';

const Boom = require('boom');

const AuthService   = require('./../services/auth_service');
const Token         = require('./../services/token');
const UsersRepo     = require('./../repositories/users_repo');

class TokenController {

  create(request, h) {

    return new AuthService(MessagesRepo, UsersRepo)
      .login(request.payload)
      .then((user) => {

        return { token: Token.generate(user.id) };
      })
      .catch((err) => Boom.badImplementation(err));
  }

}

module.exports = new TokenController();
