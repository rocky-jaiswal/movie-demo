'use strict';

const Promise = require('bluebird');
const Axios   = require('axios');
const Config  = require('config');

class AuthService {

  constructor(msgRepo, userRepo) {

    this.userRepo = userRepo;
  }

  login() {

  }

}

module.exports = AuthService;
