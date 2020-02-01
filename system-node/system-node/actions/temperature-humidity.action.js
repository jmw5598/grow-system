'use strict';

const DHTSensor = require('node-dht-sensor');
const EventMessage = require('../messaging/models').EventMessage;
const EventMessageType = require('../messaging/models').EventMessageType;
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
          this._notify(temperature, humidity);
        }
      });
    }, this.config.preferences.interval);
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

  _notify(temperature, humidity) {
    const componentState = this._buildState(temperature, humidity);
    const event = new EventMessage(EventMessageType.TEMPHUM_STATE_CHANGED, componentState);
    const message = new MqttMessage('system/node/event/temphum', event);

    MqttGateway.outbound(message);

    if(temperature > this.config.preferences.threshold.max || temperature < this.config.preferences.threshold.min) {
      const text = `[${this.node.name}][${this.config.alias}] - Temperature went beyond threshold`;
      const componentState = this._buildState(temperature, humidity, text);
      //const event = new EventMessage(EventMessageType.NOTIFICATION, componentState);
      //const notification = new MqttMessage('system/node/event/notification', this.buildMessage(temperature, humidity));
      
      //MqttGateway.outbound(notification);
    }
  }

  _buildState(temperature, humidity, message) {
    return { 
      id: this.config.id,
      alias: this.config.alias,
      preferences: this.config.preferences,
      type: this.config.type,
      details: {
        temperature: temperature,
        humidity: humidity,
        timestamp: new Date()
      },
      status: {
        state: 'started',
        timestamp: new Date()
      },
      nodeId: this.node.id, 
    }
  }

  destroy() {
    this.logger.debug(`Destroying temperature-humidity action, ${this.config.alias}`);
    this.stop();
  }

}

module.exports = TemperatureHumidityAction;
