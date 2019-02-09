'use strict';

const { SystemNodeEventRouter } = require('../../routers');

class SystemNodeEventEmitterService {

  constructor() {
    this.init();
  }

  init() {
    SystemNodeEventRouter.humidityEventChannel.subscribe(payload => this.emit(payload));
    SystemNodeEventRouter.proximityEventChannel.subscribe(payload => this.emit(payload));
    SystemNodeEventRouter.relayEventChannel.subscribe(payload => this.emit(payload));
    SystemNodeEventRouter.temperatureEventChannel.subscribe(payload => this.emit(payload));
    SystemNodeEventRouter.temperatureHumidityEventChannel.subscribe(payload => this.emit(payload));
  }

  emit(payload) {
    console.log('[API] SystemNodeEventEmitterService::Emitting new event');
  }

}

module.exports = new SystemNodeEventEmitterService();
