'use strict';

const { SystemNodeEventMessageRouter } = require('../../routers');

class ProximityPersistenceService {

  constructor() {
    SystemNodeEventMessageRouter.routes.proximity.channel
      .subscribe(message => this.persist(message));
  }

  persist(payload) {
    console.log('[API] ProximityPersistenceService::Persisting event');
  }

}

module.exports = new ProximityPersistenceService();
