'use strict';

const { MqttGateway } = require('../gateways');
const { MqttMessage } = require('../models');
const { SystemNodeMessageRouter } = require('../routers');

class WebOutboundMessageService {

  constructor() {
    SystemNodeMessageRouter.routes.event.channel
      .subscribe(message => this.process(message));
  }

  process(message) {
    const routedTopic = `web/node/event/${message.message.node.component.type.description}`;
    const outbound = new MqttMessage(routedTopic, message.message);
    MqttGateway.outbound(outbound);
    console.log('outbound to web');
  }

}

module.exports = new WebOutboundMessageService();
