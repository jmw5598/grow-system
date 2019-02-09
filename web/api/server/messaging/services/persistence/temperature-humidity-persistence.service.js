'use strict';

const { SystemNodeEventRouter } = require('../../routers');

class TemperatureHumidityPersistencService {

  constructor() {
    SystemNodeEventRouter.temperatureHumidityEventChannel
      .subscribe(payload => this.persist(payload));
  }
  
  persist(payload) {
    console.log('[API] TemperatureHumidityPersistencService::Persisting event');
  }

}

module.exports = new TemperatureHumidityPersistencService();
