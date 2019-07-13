'use strict';

const ApplicationContext = require('../application.context');
const Logger = require('../utilities').Logger;

class ConfigurationPersistenceService {

  constructor() {
    this.logger = new Logger(this.constructor.name);
    ApplicationContext.getItem('config').subscribe(config => this.persist(config));
  }

  persist(config) {
    if(config) {
      this.logger(`Persisting changes to configuration....`)
    }
  }

}