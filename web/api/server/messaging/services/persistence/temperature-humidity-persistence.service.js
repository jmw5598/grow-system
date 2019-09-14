'use strict';

const { Logger } = require('../../../utilities');
const { SystemNodeEventMessageRouter } = require('../../routers');

class TemperatureHumidityPersistencService {

  constructor() {
    this.logger = new Logger(this.constructor.name);
    SystemNodeEventMessageRouter.routes.temphum.channel
      .subscribe(message => this.persist(message));
  }

  persist(payload) {
    this.logger.debug(`Received new temphum event`);
  }

}

module.exports = new TemperatureHumidityPersistencService();
