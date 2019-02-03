'use strict';

const { MqttMessage } = require('../models');
const { MqttGateway } = require('../gateways');
const Rx = require('rxjs');
const MqttRouter = require('./mqtt.router');

class SystemRouter {

  constructor() {
    this.init();
  }

  init() {
    MqttRouter.systemChannel
      .subscribe(payload => this.route(payload));
  }

  route(payload) {
    console.log("new message for SystemRouter");
  }

}

module.exports = new SystemRouter();
