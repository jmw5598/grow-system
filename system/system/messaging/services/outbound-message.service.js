'use strict';

const { MqttGateway } = require('../gateways');
const { SystemNodeEventRouter, SystemNodeCommandRouter } = require('../routers');

class OutboundMessageService {

  constructor() {
    SystemNodeEventRouter.webOutboundChannel
      .subscribe(payload => this.process(payload));
    SystemNodeCommandRouter.systemNodeOutboundMessageChannel
      .subscribe(payload => this.process(payload));
  }

  process(message) {
    MqttGateway.outbound(message);
  }

}

module.exports = new OutboundMessageService();
