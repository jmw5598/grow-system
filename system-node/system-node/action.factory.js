'use strict';

const Logger = require('./utilities').Logger;
const RelayAction = require('./actions/relay.action');
const TemperatureHumidityAction = require('./actions/temperature-humidity.action');

console.log(RelayAction, TemperatureHumidityAction);
class ActionFactory {

  constructor() {
    this.logger = new Logger(this.constructor.name);
  }

  create(model, component) {
    this.logger.debug(`Creating component of type ${model}`);
    switch(model) {
      case 'SRD05': return new RelayAction(component);
      case 'DHT22': return new TemperatureHumidityAction(component);
      case 'HCSR04': return new ProximityAction(component);
      default: console.log('Invalid component type'); break;
    }
  }

}

module.exports = new ActionFactory();