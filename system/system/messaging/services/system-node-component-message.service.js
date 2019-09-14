'use strict';

const { MqttGateway } = require('../gateways');
const { MqttMessage } = require('../models');
const { SystemNodeMessageRouter } = require('../routers');

class SystemNodeComponentMessageService {

  constructor() {
    SystemNodeMessageRouter.routes.component.channel
      .subscribe(message => this.process(message));
  }

  process(message) {
    const routedTopic = `node/${message.message.node.id}/component/${message.topic}`;
    const outbound = new MqttMessage(routedTopic, message.message.payload);
    MqttGateway.outbound(outbound);
  }

}

module.exports = new SystemNodeComponentMessageService();
