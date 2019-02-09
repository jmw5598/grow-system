'use strict';

const { MqttMessage } = require('../models');
const Rx = require('rxjs');
const MqttRouter = require('./mqtt.router');

class SystemNodeRouter {

  constructor() {
    this.init();
  }

  init() {
    MqttRouter.systemNodeChannel
      .subscribe(payload => this.route(payload));
  }

  route(payload) {
    console.log("Inside SystemNodeRouter", payload);
  }

}

module.exports = new SystemNodeRouter();
