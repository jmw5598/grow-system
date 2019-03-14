'use strict';

const { MqttGateway } = require('../gateways');
const { SystemActionNodeRouter } = require('../routers');
const SystemContext = require('../../system.context');

class SystemNodeRegistrationService {

  constructor() {
    SystemActionNodeRouter.systemNodeRegistrationChannel.subscribe(payload => this.register(payload));
  }

  register(payload) {
    SystemContext.registerNode(payload.message);
  }

}

module.exports = new SystemNodeRegistrationService();
