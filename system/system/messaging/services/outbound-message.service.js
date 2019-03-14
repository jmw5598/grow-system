'use strict';

const { MqttGateway } = require('../gateways');
const { SystemNodeEventRouer, SystemNodeCommandRouter } = require('../routers');

class OutboundMessageService {

  constructor() {
    SystemNodeEventRouter.webOutboundChannel
      .subscribe(payload => this.process);
    SystemnodeCommnadRouter.systemNodeOutboundMessageChannel
      .subscribe(payload => this.process);
  }

  process(message) {
    console.log("[OutboundMessagService] New message, sending outbound");
    MqttGateway.outbound(message.topic, message.message);
  }

}
