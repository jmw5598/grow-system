'use strict';

const Logger = require('../../utilities').Logger;
const MqttGateway = require('../gateways').MqttGateway;
const MqttMessage = require('../models').MqttMessage;
const SystemNodeMessageRouter = require('../routers').SystemNodeMessageRouter;

class WebOutboundMessageService {

  constructor() {
    this.logger = new Logger(this.constructor.name);
    SystemNodeMessageRouter.routes.event.channel
      .subscribe(message => this.process(message));
  }

  process(message) {
    const routedTopic = `web/node/event/${message.topic}`;
    const outbound = new MqttMessage(routedTopic, message.message);
    MqttGateway.outbound(outbound);
    this.logger.debug(`Outbound to web : ${outbound.topic}`);
  }

}

module.exports = new WebOutboundMessageService();
