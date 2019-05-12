'use strict';

const { SystemNodeEventMessageRouter } = require('../../routers');

class TemperaturePersistenceService {

  constructor()   {
    SystemNodeEventMessageRouter.routes.temperature.channel
      .subscribe(message => this.persist(message));
  }

  persist(payload) {
    console.log('[API] TemperaturePersistenceService::Persisting event');
  }

}

module.exports = new TemperaturePersistenceService();
