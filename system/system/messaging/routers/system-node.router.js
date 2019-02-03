'use strict';

const { MqttMessage } = require('../models');
const { MqttGateway } = require('../gateways');
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
    console.log("new message for SystemNodeRouter");
  }

}

module.exports = new SystemNodeRouter();
