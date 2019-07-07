'use strict';

const ApplicationContext = require('../../application.context');
const Logger = require('../../utilities').Logger;
const MqttGateway = require('../gateways').MqttGateway;
const MqttMessage = require('../models').MqttMessage;
const SystemNodeMessageRouter = require('../routers').SystemNodeMessageRouter;

class SystemNodeStatusService {

  constructor() {
    this.logger = new Logger(this.constructor.name);
    this.nodes = [];
    ApplicationContext.getItem('nodes').subscribe(nodes => this.nodes = nodes);
    SystemNodeMessageRouter.routes.status.channel.subscribe(message => this.emit(message));
    this._checkHealth();
  }

  emit(message) {
    this.logger.debug(`Receive new node status: ${message.message.name}`);
    if (!this.nodes) return;
    let found = this.nodes.find(e => e.id = message.message.id);
    
    if (found) {
      found.status = { state: 'online', timestamp: new Date() };
      found.details = message.message.details;
      ApplicationContext.setItem('nodes', this.nodes);
    } else {
      this.logger.warning(`Could not find node to update status: ${message.message.id} - ${message.message.name}`);
    } 
    
    const outbound = new MqttMessage(`web/node/event/status`, message.message);
    MqttGateway.outbound(outbound);
  }

  _checkHealth() {
    this.interval = setInterval(() => {
      if(!this.nodes) return;
      
      this.nodes.forEach(n => {
        const now = new Date();
        const threshold = new Date(n.status.timestamp);
        threshold.setSeconds(threshold.getSeconds() + 10);

        if(threshold < now && n.status.state === 'online') {
          this.logger.warn(`Unresponsive node (${n.name} : ${n.status.timestamp})`);
          n.status = { state: 'offline', timestamp: new Date() };
          this._sendStatus(n);
        }
      });
    }, 1000)
  }

  _sendStatus(node) {
    const outbound = new MqttMessage(`web/node/event/status`, node);
    MqttGateway.outbound(outbound);
  }
  
}

module.exports = new SystemNodeStatusService();
