'use strict';

const { MqttMessage } = require('../../models');
const Rx = require('rxjs');
const SystemNodeRouter = require('./system-node.router');

class SystemNodeEventRouter {

  constructor() {
    this.humidityEventChannelSource = new Rx.Subject();
    this.humidityEventChannel = this.humidityEventChannelSource.asObservable();
    this.proximityEventChannelSource = new Rx.Subject();
    this.proximityEventChannel = this.proximityEventChannelSource.asObservable();
    this.relayEventChannelSource = new Rx.Subject();
    this.relayEventChannel = this.relayEventChannelSource.asObservable();
    this.temperatureEventChannelSource = new Rx.Subject();
    this.temperatureEventChannel = this.temperatureEventChannelSource.asObservable();
    this.temperatureHumidityEventChannelSource = new Rx.Subject();
    this.temperatureHumidityEventChannel = this.temperatureHumidityEventChannelSource.asObservable();
    this.notificaitonEventChannelSource = new Rx.Subject();
    this.notificationEventChannel = this.notificaitonEventChannelSource.asObservable();
    SystemNodeRouter.systemNodeEventChannel.subscribe(payload => this.route);
  }

  route(payload) {
    const [topic] = payload.topic.split('/');
    const routedTopic = payload.topic.split('/').slice(1).join('');
    const message = new MqttMessage(routedTopic, payload.message);

    switch(topic) {
      case 'humidity':
        this.humidityEventChannelSource.next(message);
        break;
      case 'proximity':
        this.proximityEventChannelSource.next(message);
        break;
      case 'relay':
        this.relayEventChannelSource.next(message);
        break;
      case 'temperature':
        this.temperatureEventChannelSource.next(message);
        break;
      case 'temperature-humidity':
        this.temperatureHumidityEventChannelSource.next(message);
        break;
      case 'notification':
        this.notificaitonEventChannelSource.next(message);
        break;
      default:
        console.log('[API] SystemNodeEventRouter::No route for event');
        break;
    }
  }

}

module.exports = new SystemNodeEventRouter();
