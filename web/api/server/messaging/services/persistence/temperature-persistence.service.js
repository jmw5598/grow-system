'use strict';

const { SystemNodeEventRouter } = require('../../routers');

class TemperaturePersistenceService {

  constructor()   {
    SystemNodeEventRouter.temperatureEventChannel
      .subscribe(payload => this.persist(payload));
  }

  persist(payload) {
    console.log('[API] TemperaturePersistenceService::Persisting event');
  }

}

module.exports = new TemperaturePersistenceService();
