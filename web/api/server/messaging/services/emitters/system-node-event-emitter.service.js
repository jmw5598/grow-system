'use strict';

const { SystemNodeEventRouter } = require('../../routers');
const { SseEmitterService } = require('../../../services');

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
    SseEmitterService.emit(payload);
  }

}

module.exports = new SystemNodeEventEmitterService();
