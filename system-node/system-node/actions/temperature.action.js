'use strict';

const Logger = require('../utilities').Logger;
const { MqttGateway } = require('../messaging');

class TemperatureAction {

  constructor(node, config) {
    this.node = node;
    this.config = config;
    this.logger = new Logger(this.constructor.name);
    this.temperature = 0;
    this.preferences = config.preferences;
    this.start();
  }

  start() {
    this.interval = setInterval(() => {
      console.log('TemperatureAction::Alias::' + this.config.alias);
      console.log('TemperatureAction::Taking reading');
      console.log('TemperatureAction::Publishing reading');
    }, this.config.preferences.interval);
  }

  stop() {
    if(this.interval)
      clearInterval(this.interval);
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
    this.logger.debug(`Destroying temperature sensor, ${this.config.alias}`);
    this.stop();
  }

}

module.exports = TemperatureAction;
