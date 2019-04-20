'use strict';

const { SystemNodeEventMessageRouter } = require('../../routers');

class HumidityPersistenceService {

  constructor() {
    SystemNodeEventMessageRouter.routes.humidity.channel
      .subscribe(message => this.persist(message));
  }

  persist(payload) {
    console.log('[API] HumidityPersistenceService::Persisting event');
  }

}

module.exports = new HumidityPersistenceService();
