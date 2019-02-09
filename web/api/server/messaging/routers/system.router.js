'use strict';

const { MqttMessage } = require('../models');
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
    console.log("SystemNodeRouter route method", payload);
  }

}

module.exports = new SystemRouter();
