'use strict';

const EventMessage = require('../models').EventMessage;
const EventMessageType = require('../models').EventMessageType;
const MqttGateway = require('../gateways').MqttGateway;
const MqttMessage = require('../models').MqttMessage;
const SystemCommandMessageRouter = require('../routers').SystemCommandMessageRouter;

class SystemStatusService {
  
  constructor() {
    SystemCommandMessageRouter.routes.status.channel
      .subscribe(message => this.emit(message));
  }

  emit(message) {
    // TODO: Create current state of system.
    const systemState = { status: "Testing" };
    const event = new EventMessage(EventMessageType.SYSTEM_CURRENT_STATE, systemState);
    const outbound = new MqttMessage('web/system/event/status', event);
    MqttGateway.outbound(outbound);
  }

}

module.exports = new SystemStatusService();