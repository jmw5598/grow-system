'use strict';

const SystemNodeContext = require('../../system-node.context');
const { SystemNodeActionRouter } = require('../routers');

class TemperatureHumidityActionService {

  contructor() {
      this.temperatureHumidityActionSubscription = SystemNodeActionRouter.temperatureHumidityActionChannel
        .subscribe(sensor => this.process(sensor));
      this.sensorsSubscription = SystemContext.sensors
        .subscribe(sensors => this.sensors = sensors);
  }

  process(message) {
    console.log("processing temp hum sensor message", message);
    let sensor = this.sensors.temperatureHumidity.find(s => s.id === message.message.component.id);
    const event = message.message.component.event;

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
        console.log('[TemperatureHumidityActionService] Process, no processing case found');
        break;
    }

  }

}

module.exports = new TemperatureHumidityActionService();
