'use strict';

const os = require('os');
const ApplicationContext = require('../../application.context');
const MqttGateway = require('../gateways').MqttGateway;
const SystemNodeMessageRouter = require('../routers').SystemNodeMessageRouter;

const { EventMessage, EventMessageType, MqttMessage } = require('@grow/common');

class SystemNodeStatuService {

  constructor() {
    ApplicationContext.getItem('config').subscribe(config => this.config = config);
    SystemNodeMessageRouter.routes.register.channel
      .subscribe(req => this.register());
    this.emit();
  }

  emit() {
    this.interval = setInterval(() => {
      if(!this.config || !this.config.node) return;

      let nodeState = { id: this.config.node.id, name: this.config.node.name };
      nodeState.details = this._generateSystemDetails();
      nodeState.status = {
        state: 'online',
        timestamp: new Date()
      }
      
      const event = new EventMessage(EventMessageType.NODE_STATE_CHANGED, nodeState);
      const outbound = new MqttMessage('system/node/status', event);

      MqttGateway.outbound(outbound);
    }, 1000);
  }

  register() {
    const registration = new MqttMessage('system/node/register', this.config.node);
    MqttGateway.outbound(registration);
  }

  _generateSystemDetails() {
    return {
      arch: os.arch(),
      type: os.type(),
      platform: os.platform(),
      release: os.release(),
      hostname: os.hostname(),
      uptime: os.uptime(),
      cpus: os.cpus(),
      loadavg: os.loadavg(),
      freemem: os.freemem(),
      totalmem: os.totalmem()
    }
  }

}

module.exports = new SystemNodeStatuService();
