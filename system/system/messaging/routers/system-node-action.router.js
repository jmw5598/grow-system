'use strict';

const { MqttGateway } = require('../gateways');
const { MqttMessage } = require('../models');
const Rx = require('rxjs');
const SystemNodeRouter = require('./system-node.router');

class SystemNodeActionRouter {

  constructor() {
    this.systemNodeActionEventChannelSource = new Rx.Subject();
    this.systemNodeActionEventChannel = this.systemNodeActionEventChannelSource.asObservable();
    SystemNodeRouter.systemNodeActionChannel.subscribe(payload => this.route(payload));
  }

  route(payload) {
    const [topic] = payload.topic.split('/');
    const routedTopic = payload.topic.substring(payload.topic.indexOf('/') + 1);
    const message = new MqttMessage(routedTopic, payload.message);

    switch(topic) {
      case 'event':
        console.log("new event to api");
        this.systemNodeActionEventChannelSource.next(message);
        break;
      default:
        console.log('[System] SystemNodeActionRouter::No topic match');
        break;
    }
  }

}

module.exports = new SystemNodeActionRouter();
