'use strict';

const { MqttMessage } = require('../models');
const Rx = require('rxjs');
const SystemNodeRouter = require('./system-node.router');

class SystemNodeActionRouter {

  constructor() {
    this.init();
  }

  init() {
    SystemNodeRouter.systemNodeActionChannel
      .subscribe(payload => this.route(payload));
  }

  route(payload) {
    console.log('SystemNodeActionRouter::Route');
  }

}

module.exports = new SystemNodeActionRouter();
