'use strict';

const { MqttMessage } = require('../models');
const MqttRouter = require('./mqtt.router');

class SystemRouter {

  constructor() {
    this.init();
  }

  init() {
    MqttRouter.systemRouter
      .subscribe(payload => this.route(payload));
  }

  route(payload) {
    console.log("new message for SystemRouter");
  }

}

module.exports = new SystemRouter();
