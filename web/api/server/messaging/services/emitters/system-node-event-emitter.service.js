'use strict';

require('rxjs/add/observable/merge');
const Rx = require('rxjs');
const Logger = require('../../../utilities').Logger;
const SystemNodeEventMessageRouter = require('../../routers').SystemNodeEventMessageRouter;
const SseEmitterService = require('../../../services').SseEmitterService;

class SystemNodeEventEmitterService {

  constructor() {
    this.logger = new Logger(this.constructor.name);
    Rx.Observable.merge(
      SystemNodeEventMessageRouter.routes.humidity.channel,
      SystemNodeEventMessageRouter.routes.moisture.channel,
      SystemNodeEventMessageRouter.routes.notification.channel,
      SystemNodeEventMessageRouter.routes.proximity.channel,
      SystemNodeEventMessageRouter.routes.relay.channel,
      SystemNodeEventMessageRouter.routes.temperature.channel,
      SystemNodeEventMessageRouter.routes.temphum.channel,
      SystemNodeEventMessageRouter.routes.status.channel
    ).subscribe(message => this.emit(message));
  }

  emit(message) {
    this.logger.debug(`Emitting new event ${message.topic}`);
    SseEmitterService.emit(message.message);
  }

}

module.exports = new SystemNodeEventEmitterService();
