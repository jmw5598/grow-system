'use strict';

const RelayAction = require('./realy.action');
const TemperatureHumidityAction = require('./temperature-humidity.action');

class ActionFactory {

  constructor() {}

  get(obj) {
    switch(obj.type.model) {
      case 'SRD05': return new RelayAction(obj);
      case 'DHT22': return new TemperatureHumidityAction(obj);
      default: console.log('Invalid component type'); break;
    }
  }

}

module.exports = new ActionFactory();