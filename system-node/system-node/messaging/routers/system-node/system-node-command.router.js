'use strict';

const { MqttMessage } = require('../../models');
const Rx = require('rxjs');
const MqttRouter = require('../mqtt/mqtt.router');

class SystemNodeCommandRouter {

  constructor() {
    this.humidityCommandChannelSource = new Rx.Subject();
    this.humidityCommandChannel = this.humidityCommandChannelSource.asObservable();
    this.proximityCommandChannelSource = new Rx.Subject();
    this.proximityCommandChannel = this.proximityCommandChannelSource.asObservable();
    this.relayCommandChannelSource = new Rx.Subject();
    this.relayCommandChannel = this.relayCommandChannelSource.asObservable();
    this.temperatureCommandChannelSource = new Rx.Subject();
    this.temperatureCommandChannel = this.temperatureCommandChannelSource.asObservable();
    this.temperatureHumidityCommandChannelSource = new Rx.Subject();
    this.temperatureHumidityCommandChannel = this.temperatureHumidityCommandChannelSource.asObservable();
    this.systemNodeCommandSubscription = MqttRouter.systemNodeCommandChannel
      .subscribe(payload => this.route(payload));
  }

  route(payload) {
    console.log("new command message", payload);
    const [topic] = payload.topic.split('/');
    const message = new MqttMessage('', payload.message);

    switch(topic) {
      case 'humidity':
        this.humidityCommandChannelSource.next(message);
        break;
      case 'proximity':
        this.proximityCommandChannelSource.next(message);
        break;
      case 'relay':
        this.relayCommandChannelSource.next(message);
        break;
      case 'temperature':
        this.temperatureCommandChannelSource.next(message);
        break;
      case 'temperature-humidity':
        this.temperatureHumidityCommandChannelSource.next(message);
        break;
      default:
        console.log('[SYSTEM-NODE] SystemNodeCommandRouter::No topic matching command');
        break;
    }
  }

}

module.exports = new SystemNodeCommandRouter();
