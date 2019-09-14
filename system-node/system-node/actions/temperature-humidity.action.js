'use strict';

const DHTSensor = require('node-dht-sensor');
const Logger = require('../utilities').Logger;
const MqttGateway = require('../messaging/gateways/mqtt.gateway');
const MqttMessage = require('../messaging/models').MqttMessage;

class TemperatureHumidityAction {

  constructor(node, config) {
    this.node = node;
    this.config = config;
    this.logger = new Logger(this.constructor.name);
    this.start();
  }

  start() {
    this.interval = setInterval(() => {
      DHTSensor.read(22, this.config.pin, (error, temperature, humidity) => {
        if(!error) {
          const message = new MqttMessage(
            'system/node/event/temphum', 
            this.buildMessage(temperature, humidity)
          );
          
          MqttGateway.outbound(message);
          
          if(temperature > this.config.preferences.threshold.max || temperature < this.config.preferences.threshold.min) {
            const notification = new MqttMessage('system/node/event/notification', this.buildMessage(temperature, humidity));
            MqttGateway.outbound(notification);
          }
        }
      });
    }, this.config.preferences.interval);
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
    this.config.preferences.interval = value;
  }

  setThreshold(value) {
    this.config.preferences.threshold = value;
  }

  buildMessage(temperature, humidity) {
    // maybe create a class model for this?
    // replace with configuration details when possible (node details)
    return {
      node: {
        id: 123,
        alias: "Alias",
        component: [{
          id: this.config.id,
          alias: this.config.alias,
          type: this.config.type,
          pin: this.config.pin,
          preferences: this.config.preferences,
          temperature: temperature,
          humidity: humidity
        }]
      }
    }
  }

  destroy() {
    this.logger.debug(`Destroying temperature-humidity action, ${this.config.alias}`);
    this.stop();
  }

}

module.exports = TemperatureHumidityAction;
