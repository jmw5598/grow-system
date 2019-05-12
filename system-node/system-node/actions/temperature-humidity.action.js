'use strict';

const DHTSensor = require('node-dht-sensor');
const ComponentAction = require('./component.action');
const SystemNodeContext = require('../system-node.context');
const { MqttGateway } = require('../messaging');
const { MqttMessage } = require('../messaging/models');


class TemperatureHumidityAction extends ComponentAction {

  constructor(config) {
    super(config.id, config.alias, config.type, config.pin);
    this.temperature = 0;
    this.humidity = 0;
    this.preferences = config.preferences;
    SystemNodeContext.configuration
      .subscribe(configuration => this.systemConfiguration = configuration);
    this.start();
  }

  start() {
    this.interval = setInterval(() => {
      DHTSensor.read(22, this.pin, (error, temperature, humidity) => {
        if(!error) {
          const message = new MqttMessage('system/system-node/event/temperature-humidity', this.buildMessage(temperature, humidity));
          MqttGateway.outbound(message);
          if(temperature > this.preferences.threshold.max || temperature < this.preferences.threshold.min) {
            const notification = new MqttMessage('system/system-node/event/notification', this.buildMessage(temperature, humidity));
            MqttGateway.outbound(notification);
          }
        }
      });
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

  buildMessage(temperature, humidity) {
    // maybe create a class model for this?
    // replace with configuration details when possible (node details)
    return {
      node: {
        id: 123,
        alias: "Alias",
        component: [{
          id: this.id,
          alias: this.alias,
          type: this.type,
          pin: this.pin,
          preferences: this.preferences,
          temperature: temperature,
          humidity: humidity
        }]
      }
    }
  }

}

module.exports = TemperatureHumidityAction;
