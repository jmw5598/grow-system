'use strict';

const { SystemNodeEventRouter } = require('../../routers');

class HumidityPersistenceService {

  constructor() {
    SystemNodeEventRouter.humidityEventChannel
      .subscribe(payload => this.persist(payload));
  }

  persist(payload) {
    console.log('[API] HumidityPersistenceService::Persisting event');
  }

}

module.exports = new HumidityPersistenceService();
