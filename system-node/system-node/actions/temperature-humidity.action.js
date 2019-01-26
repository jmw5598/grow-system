'use strict';

const ComponentAction = require('./component.action');
const { MqttGateway } = require('../messaging');

class TemperatureHumidityAction extends ComponentAction {

  constructor(config) {
    super(config.id, config.alias, config.type, config.pin);
    this.temperature = 0;
    this.humidity = 0;
    this.preferences = config.preferences;
    this.start();
  }

  start() {
    this.interval = setInterval(() => {
      console.log('TemperatureHumidityAction::Alias::' + this.alias);
      console.log('TemperatureHumidityAction::Taking readings');
      console.log('TemperatureHumitidyAction::Publishing readings');
    }, this.preferences.interval);
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

}

module.exports = TemperatureHumidityAction;
