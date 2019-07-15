'use strict';

const RelayAction = require('./realy.action');
const TemperatureHumidityAction = require('./temperature-humidity.action');

class ActionFactory {

  constructor() {}

  static get(model, component) {
    switch(model) {
      case 'SRD05': return new RelayAction(obj);
      case 'DHT22': return new TemperatureHumidityAction(obj);
      default: console.log('Invalid component type'); break;
    }
  }

}

module.exports = ActionFactory;