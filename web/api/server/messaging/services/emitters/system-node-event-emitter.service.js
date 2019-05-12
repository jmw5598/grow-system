'use strict';

require('rxjs/add/observable/merge');
const Rx = require('rxjs');

const { SystemNodeEventMessageRouter } = require('../../routers');
const { SseEmitterService } = require('../../../services');

class SystemNodeEventEmitterService {

  constructor() {
    Rx.Observable.merge(
      SystemNodeEventMessageRouter.routes.humidity.channel,
      SystemNodeEventMessageRouter.routes.moisture.channel,
      SystemNodeEventMessageRouter.routes.notification.channel,
      SystemNodeEventMessageRouter.routes.proximity.channel,
      SystemNodeEventMessageRouter.routes.relay.channel,
      SystemNodeEventMessageRouter.routes.temperature.channel,
      SystemNodeEventMessageRouter.routes.temphum.channel
    ).subscribe(message => this.emit(message));
  }

  emit(payload) {
    console.log('[API] SystemNodeEventEmitterService::Emitting new event', payload);
    SseEmitterService.emit(payload);
  }

}

module.exports = new SystemNodeEventEmitterService();
