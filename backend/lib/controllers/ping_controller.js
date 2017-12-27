'use strict';

class PingController {

  show(request, h) {

    return { pong: true };
  }

}

module.exports = new PingController();
