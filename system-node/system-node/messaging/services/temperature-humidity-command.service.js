'use strict';

const ApplicationContext = require('../../application.context');
const SystemNodeCommandMessageRouter = require('../routers').SystemNodeCommandMessageRouter;

class TemperatureHumidityCommandService {

  constructor() {
    ApplicationContext.getItem('actions').subscribe(actions => this.actions = actions);
    SystemNodeCommandMessageRouter.routes.temphum.channel
      .subscribe(message => this.process(message));
  }

  process(message) {
    if(!this.actions) return;
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
