'use strict';

const Logger = require('../utilities').Logger;
const { MqttGateway } = require('../messaging');

class HumidityAction {

  constructor(node, config) {
    this.node = node;
    this.config = config
    this.logger = new Logger(this.constructor.name);
    this.start();
  }

  start() {
    this.interval = setInterval(() => {
      console.log('HumidityAction::Alias:' + this.config.alias);
      console.log('HumidityAction::Taking reading');
      console.log('HumidityAction::Publishing reading');
    }, this.preferences.interval)
  }

  stop() {
    if(this.interval)
      clearInterval(this.config.interval);
  }

  setInterval(value) {
    this.stop();
    this.config.preferences.interval = value;
    this.start();
  }

  setThreshold(value) {
    this.config.preferences.threshold = value;
  }

  destroy() {
    this.logger.debug(`Destroying humidity action, ${this.alias}`);
    this.stop();
  }

}

module.exports = HumidityAction;
