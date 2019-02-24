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
    // TODO: look into making this cleaner.  Not sure if there is a better option
    // for handling routed vs outbound topics?
    const outboundTopic = `system-node/${payload.message.node.id}/action`;
    const routedTopic = payload.topic.split('/').slice(1);
    let message;

    switch(topic) {
      case 'event':
        message = new MqttMessage(`${routedTopic}`, payload.message);
        this.systemNodeActionEventChannelSource.next(message);
        break;
      case 'humidity':
        message = new MqttMessage(`${outboundTopic}/humidity`, payload.message);
        MqttGateway.outbound(message);
        break;
      case 'proximity':
        message = new MqttMessage(`${outboundTopic}/proximity`, payload.message);
        MqttGateway.outbound(message);
        break;
      case 'relay':
        console.log("new relay action");
        console.log("sending relay action to", outboundTopic);
        message = new MqttMessage(`${outboundTopic}/relay`, payload.message);
        MqttGateway.outbound(message);
        break;
      case 'temperature':
        message = new MqttMessage(`${outboundTopic}/temperature`, payload.message);
        MqttGateway.outbound(message);
        break;
      case 'temperature-humidity':
        message = new MqtMessage(`${outboundTopic}/temperature-humidity`, payload.message);
        MqttGateway.outbound(message);
        break;
      default:
        console.log('[System] SystemNodeActionRouter::No topic match');
        break;
    }
  }

}

module.exports = new SystemNodeActionRouter();
