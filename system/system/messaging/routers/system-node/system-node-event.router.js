'use strict';

const { MqttGateway } = require('../../gateways');
const { MqttMessage } = require('../../models');
const Rx = require('rxjs');
const SystemNodeRouter = require('./system-node.router');

class SystemNodeEventRouter {

  constructor() {
    this.webOutboundChannelSource = new Rx.Subject();
    this.webOutboundChannel = this.webOutboundChannelSource.asObservable();
    SystemNodeRouter.systemNodeEventChannel
      .subscribe(payload => this.route);
  }

  route(payload) {
    const [topic] = payload.topic.split('/');
    let routedTopic = 'web/system-node/event/';

    switch(topic) {
      case 'humidity':
        routedTopic += 'humidity';
        break;
      case 'notification':
        routedTopic += 'notification';
        break;
      case 'proximity':
        routedTopic += 'proximity';
        break;
      case 'relay':
        routedTopic += 'relay';
        break;
      case 'temperature':
        routedTopic += 'temperature';
        break;
      case 'temperature-humidity':
        routedTopic += 'temperature-humidity';
        break;
      default:
        console.log('[SystemNodeEventRouter]::Default::No route found');
        break;
    }

    const message = new MqttMessage(routedTopic, payload.message);
    this.webOutboundChannelSource.next(message);
  }

}

module.exports = new SystemNodeEventRouter();
