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
    const routedTopic = `system-node/${payload.message.node.id}/action`;

    switch(topic) {
      case 'event':
        this.systemNodeActionEventChannelSource.next(message);
        break;
      case 'humidity':
        const message = new MqttMessage(`${routedTopic}/humidity`, payload.message);
        MqttGateway.outbound(message);
        break;
      case 'proximity':
        const message = new MqttMessage(`${routedTopic}/proximity`, payload.message);
        MqttGateway.outbound(message);
        break;
      case 'relay':
        const message = new MqttMessage(`${routedTopic}/relay`, payload.message);
        MqttGateway.outbound(message);
        break;
      case 'temperature':
        const message = new MqttMessage(`${routedTopic}/temperature`, payload.message);
        MqttGateway.outbound(message);
        break;
      case 'temperature-humidity':
        const message = new MqtMessage(`${routedTopic}/temperature-humidity`, payload.message);
        MqttGateway.outbound(message);
        break;
      default:
        console.log('[System] SystemNodeActionRouter::No topic match');
        break;
    }
  }

}

module.exports = new SystemNodeActionRouter();
