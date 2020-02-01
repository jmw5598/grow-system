//const DHTSensor = require('node-dht-sensor');
import { 
  EventMessage, EventMessageType, Logger, MqttMessage, MqttGateway, 
  SystemNodeConfiguration, Component, SystemConfiguration } from '@grow/common';

export class TemperatureHumidityAction {

  private _logger: Logger;
  private _gateway: MqttGateway
  private _node: SystemNodeConfiguration;
  private _config: Component;
  private _interval: any;

  constructor(node: SystemNodeConfiguration, config: Component) {
    this._gateway = MqttGateway.getInstance();
    this._node = node;
    this._config = config;
    this._logger = new Logger(this.constructor.name);
    this.start();
  }

  start(): void {
    this._interval = setInterval(() => {
      // DHTSensor.read(22, this.config.pin, (error, temperature, humidity) => {
      //   if(!error) {
      //     this._notify(temperature, humidity);
      //   }
      // });
    }, this._config.preferences.interval);
  }

  stop(): void {
    if(this._interval)
      clearInterval(this._interval);
  }

  setInterval(value: number): void {
    this.stop();
    this._config.preferences.interval = value;
  }

  setThreshold(value: number): void {
    this._config.preferences.threshold = value;
  }

  _notify(temperature: number, humidity: number): void {
    const componentState = this._buildState(temperature, humidity, null);
    const event = new EventMessage(EventMessageType.TEMPHUM_STATE_CHANGED, componentState);
    const message = new MqttMessage('system/node/event/temphum', event);

    this._gateway.outbound(message);

    if(temperature > this._config.preferences.threshold.max || temperature < this._config.preferences.threshold.min) {
      const text = `[${this._node.name}][${this._config.alias}] - Temperature went beyond threshold`;
      const componentState = this._buildState(temperature, humidity, text);
      //const event = new EventMessage(EventMessageType.NOTIFICATION, componentState);
      //const notification = new MqttMessage('system/node/event/notification', this.buildMessage(temperature, humidity));
      
      //this._gateway.outbound(notification);
    }
  }

  _buildState(temperature: number, humidity: number, message: any): any {
    return { 
      id: this._config.id,
      alias: this._config.alias,
      preferences: this._config.preferences,
      type: this._config.type,
      details: {
        temperature: temperature,
        humidity: humidity,
        timestamp: new Date()
      },
      status: {
        state: 'started',
        timestamp: new Date()
      },
      nodeId: this._node.id, 
    }
  }

  destroy(): void {
    this._logger.debug(`Destroying temperature-humidity action, ${this.config.alias}`);
    this.stop();
  }

}
