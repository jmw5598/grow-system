'use strict';

const ComponentAction = require('./component.action');
const Logger = require('../utilities').Logger;
const { MqttGateway } = require('../messaging');

class HumidityAction extends ComponentAction {

  constructor(config) {
    super(config.id, config.alias, config.type, config.pin);
    this.logger = new Logger(this.constructor.name);
    this.preferences = config.preferences;
    this.start();
  }

  start() {
    this.interval = setInterval(() => {
      console.log('HumidityAction::Alias:' + this.alias);
      console.log('HumidityAction::Taking reading');
      console.log('HumidityAction::Publishing reading');
    }, this.preferences.interval)
  }

  stop() {
    if(this.interval)
      clearInterval(this.interval);
  }

  setInterval(value) {
    this.stop();
    this.preferences.interval = value;
    this.start();
  }

  setThreshold(value) {
    this.preferences.threshold = value;
  }

  destroy() {
    this.logger.debug(`Destroying humidity action, ${this.alias}`);
    this.stop();
  }

}

module.exports = HumidityAction;
