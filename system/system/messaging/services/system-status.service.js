'use strict';

const ApplicationContext = require('../../application.context');
const EventMessage = require('../models').EventMessage;
const EventMessageType = require('../models').EventMessageType;
const MqttGateway = require('../gateways').MqttGateway;
const MqttMessage = require('../models').MqttMessage;
const SystemCommandMessageRouter = require('../routers').SystemCommandMessageRouter;

class SystemStatusService {
  
  constructor() {
    ApplicationContext.getItem('nodes').subscribe(nodes => this.nodes = nodes);
    ApplicationContext.getItem('config').subscribe(config => this.systemConfig = config);
    SystemCommandMessageRouter.routes.status.channel.subscribe(message => this.emit(message));
  }

  emit(message) {
    // TODO: Create current state of system.
    const systemState = { system: this.systemConfig, nodes: this.nodes };
    const event = new EventMessage(EventMessageType.SYSTEM_CURRENT_STATE, systemState);
    const outbound = new MqttMessage('web/system/event/status', event);
    MqttGateway.outbound(outbound);
  }

}

module.exports = new SystemStatusService();