'use strict';

const DHTSensor = require('node-dht-sensor');
const ComponentAction = require('./component.action');
const Logger = require('../utilities').Logger;
const MqttGateway = require('../messaging/gateways/mqtt.gateway');
const MqttMessage = require('../messaging/models').MqttMessage;

class TemperatureHumidityAction extends ComponentAction {

  constructor(config) {
    super(config.id, config.alias, config.type, config.pin);
    this.logger = new Logger(this.constructor.name);
    this.preferences = config.preferences;
    this.start();
  }

  start() {
    this.interval = setInterval(() => {
      DHTSensor.read(22, this.pin, (error, temperature, humidity) => {
        if(!error) {
          const message = new MqttMessage('system/node/event/temphum', this.buildMessage(temperature, humidity));
          MqttGateway.outbound(message);
          if(temperature > this.preferences.threshold.max || temperature < this.preferences.threshold.min) {
            const notification = new MqttMessage('system/node/event/notification', this.buildMessage(temperature, humidity));
            MqttGateway.outbound(notification);
          }
        }
      });
    }, this.preferences.interval);
  }

  _fakeRead() {
    const temperature = Math.random() * (80 - 65) + 65;
    const humidity = Math.random() * (40 - 25) + 40;
    const event = new MqttMessage('system/node/event/temphum', this.buildMessage(temperature, humidity));
    this.logger.debug(`${this.alias} : T: ${temperature} - H: ${humidity}`);
    MqttGateway.outbound(event);
  }

  stop() {
    if(this.interval)
      clearInterval(this.interval);
  }

  setInterval(value) {
    this.stop();
    this.preferences.interval = value;
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

  destroy() {
    this.logger.debug(`Destroying temperature-humidity action, ${this.alias}`);
    this.stop();
  }

}

module.exports = TemperatureHumidityAction;
