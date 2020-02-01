'use strict';

const fs = require('fs');
const ApplicationContext = require('../application.context');
const { Logger } = require('@grow/common');

class ConfigurationPersistenceService {

  constructor() {
    this.logger = new Logger(this.constructor.name);
    ApplicationContext.getItem('config').subscribe(config => this.persist(config));
  }

  persist(config) {
    if (!config) return;
    this.logger.debug(`Persisting changes to configuration....`);
    fs.writeFileSync('config/system-node.json', JSON.stringify(config, null, 2));
  }

}

module.exports = new ConfigurationPersistenceService();