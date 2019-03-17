'use strict';

const SystemNodeContext = require('../../system-node.context');
const { SystemNodeCommandRouter } = require('../routers');

class TemperatureHumidityCommandService {

  constructor() {
      this.temperatureHumidityCommandSubscription = SystemNodeCommandRouter.temperatureHumidityCommandChannel
        .subscribe(sensor => this.process(sensor));
      this.sensorsSubscription = SystemNodeContext.sensors
        .subscribe(sensors => this.sensors = sensors);
  }

  process(message) {
    console.log("processing temp hum sensor message", message);
    let sensor = this.sensors.temperatureHumidity.find(s => s.id === message.message.component.id);
    const event = message.message.command;

    if(!sensor) return;

    switch(event) {
      case 'start':
        sensor.start();
        break;
      case 'stop':
        sensor.stop();
        break;
      case 'setInterval':
        sensor.setInterval(message.message.component.interval);
        break;
      case 'setThreshold':
        sensor.setThreshold(message.message.component.threshold);
        break;
      default:
        console.log('[TemperatureHumidityCommandService] Process, no processing case found');
        break;
    }

  }

}
module.exports = new TemperatureHumidityCommandService();
//module.exports = new TemperatureHumidityCommandService();
