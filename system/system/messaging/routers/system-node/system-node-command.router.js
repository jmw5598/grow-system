'use strict';

const { MqttGateway } = require('../../gateways');
const { MqttMessage } = require('../../models');
const Rx = require('rxjs');
const SystemNodeRouter = require('./system-node.router');

class SystemNodeCommandRouter {

  constructor() {
    this.systemNodeOutboundMessageChannelSource = new Rx.Subject();
    this.systemNodeOutboundMessageChannel = this.systemNodeOutboundMessageChannelSource.asObservable();
    SystemNodeRouter.systemNodeCommandChannel.subscribe(payload => this.route(payload));
  }

  route(payload) {
    const [topic] = payload.topic.split('/');
    const outboundTopic = `system-node/${payload.message.node.id}/command`;
    const routedTopic = payload.topic.split('/').slice(1);
    let message;

    switch(topic) {
      case 'humidity':
        message = new MqttMessage(`${outboundTopic}/humidity`, payload.message);
        break;
      case 'proximity':
        message = new MqttMessage(`${outboundTopic}/proximity`, payload.message);
        break;
      case 'relay':
        message = new MqttMessage(`${outboundTopic}/relay`, payload.message);
        break;
      case 'temperature':
        message = new MqttMessage(`${outboundTopic}/temperature`, payload.message);
        break;
      case 'temperature-humidity':
        message = new MqttMessage(`${outboundTopic}/temperature-humidity`, payload.message);
        break;
      default:
        console.log('[SystemNodeCommandRouter]::Default::No route found');
        break;
    }

    this.systemNodeOutboundMessageChannelSource.next(message);
  }

}

module.exports = new SystemNodeCommandRouter();
