'use strict';

const ApplicationContext = require('../../application.context');
const Logger = require('../../utilities').Logger;
const MqttGateway = require('../gateways').MqttGateway;
const SystemNodeMessageRouter = require('../routers').SystemNodeMessageRouter;

class SystemNodeRegistrationService {

  constructor() {
    this.logger = new Logger(this.constructor.name);
    
    SystemNodeMessageRouter.routes.register.channel
      .subscribe(message => this.register(message));
    
    ApplicationContext.getItem('nodes')
      .subscribe(nodes => this.nodes = nodes);
  }

  register(payload) {
    this.logger.debug(`Registering new node: ${payload.message.name}`);
    
    if(this.nodes) {
      const found = this.nodes.find(e => e.id === payload.message.id);
      if (found) {
        Object.assign(found, payload.message);
        Object.assign(found.status, { state: 'online', timestamp: new Date() });
      } else {
        let node = payload.message;
        node.status = { state: 'online', timestamp: new Date() };
        this.nodes.push(paylaod);
      }
    }
    else {
      let node = payload.message;
      node.status = { state: 'online', timestamp: new Date() };
      this.nodes = [];
      this.nodes.push(payload.message);
    }

    ApplicationContext.setItem('nodes', this.nodes);
  }

}

module.exports = new SystemNodeRegistrationService();
