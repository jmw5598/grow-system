'use strict';

const { MqttGateway } = require('../gateways');
const { MqttMessage } = require('../models');
const { SystemNodeMessageRouter } = require('../routers');

class SystemNodeOutboundMessageService {

  constructor() {
    SystemNodeMessageRouter.routes.command.channel
      .subscribe(message => this.process(message));
  }

  process(message) {
    const routedTopic = `node/${message.message.node.id}/command/${message.topic}`;
    const outbound = new MqttMessage(routedTopic, message.message);
    MqttGateway.outbound(outbound);
    console.log('outbound to node');
  }

}

module.exports = new SystemNodeOutboundMessageService();
