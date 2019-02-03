'use strict';

const { MqttMessage } = require('../models');
const MqttRouter = require('./mqtt.router');

class SystemNodeRouter {

  constructor() {
    this.init();
  }

  init() {
    MqttRouter.systemNodeRouter
      .subscribe(payload => this.route(payload));
  }

  route(payload) {
    console.log("new message for SystemNodeRouter");
  }

}

module.exports = new SystemNodeRouter();
