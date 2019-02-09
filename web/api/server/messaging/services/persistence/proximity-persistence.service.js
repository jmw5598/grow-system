'use strict';

const { SystemNodeEventRouter } = require('../../routers');

class ProximityPersistenceService {

  constructor() {
    SystemNodeEventRouter.proximityEventChannel
      .subscribe(payload => this.persist(payload));
  }

  persist(payload) {
    console.log('[API] ProximityPersistenceService::Persisting event');
  }

}

module.exports = new ProximityPersistenceService();
