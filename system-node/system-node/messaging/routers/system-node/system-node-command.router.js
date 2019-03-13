'use strict';

const { MqttMessage } = require('../../models');
const Rx = require('rxjs');
const MqttRouter = require('../mqtt/mqtt.router');

class SystemNodeCommandRouter {

  constructor() {
    this.humidityActionChannelSource = new Rx.Subject();
    this.humidityActionChannel = this.humidityActionChannelSource.asObservable();
    this.proximityActionChannelSource = new Rx.Subject();
    this.proximityActionChannel = this.proximityActionChannelSource.asObservable();
    this.relayActionChannelSource = new Rx.Subject();
    this.relayActionChannel = this.relayActionChannelSource.asObservable();
    this.temperatureActionChannelSource = new Rx.Subject();
    this.temperatureActionChannel = this.temperatureActionChannelSource.asObservable();
    this.temperatureHumidityActionChannelSource = new Rx.Subject();
    this.temperatureHumidityActionChannel = this.temperatureHumidityActionChannelSource.asObservable();
    this.systemNodeCommandSubscription = MqttRouter.systemNodeCommandChannel
      .subscribe(payload => this.route);
  }

  route(payload) {
    const [topic] = payload.topic.split('/');
    const message = new MqttMessage('', payload.message);

    switch(topic) {
      case 'humidity':
        this.humidityActionChannelSource.next(message);
        break;
      case 'proximity':
        this.proximityActionChannelSource.next(message);
        break;
      case 'relay':
        this.relayActionChannelSource.next(message);
        break;
      case 'temperature':
        this.temperatureActionChannelSource.next(message);
        break;
      case 'temperature-humidity':
        this.temperatureHumidityActionChannelSource.next(message);
        break;
      default:
        console.log('[SYSTEM-NODE] SystemNodeActionRouter::No topic matching action');
        break;
    }
  }

}

module.exports = new SystemNodeCommandRouter();
