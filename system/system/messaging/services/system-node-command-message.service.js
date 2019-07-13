'use strict';

const { MqttGateway } = require('../gateways');
const { MqttMessage } = require('../models');
const { SystemNodeMessageRouter } = require('../routers');

class SystemNodeCommandMessageService {

  constructor() {
    SystemNodeMessageRouter.routes.command.channel
      .subscribe(message => this.process(message));
  }

  process(message) {
    const routedTopic = `node/${message.message.node.id}/command/${message.topic}`;
    const outbound = new MqttMessage(routedTopic, message.message);
    MqttGateway.outbound(outbound);
  }

}

module.exports = new SystemNodeCommandMessageService();
