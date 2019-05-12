'use strict';

const { SystemNodeEventMessageRouter } = require('../../routers');

class TemperatureHumidityPersistencService {

  constructor() {
    SystemNodeEventMessageRouter.routes.temphum.channel
      .subscribe(message => this.persist(message));
  }

  persist(payload) {
    console.log('[API] TemperatureHumidityPersistencService::Persisting event');
  }

}

module.exports = new TemperatureHumidityPersistencService();
