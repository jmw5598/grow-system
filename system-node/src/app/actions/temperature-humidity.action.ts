//const DHTSensor = require('node-dht-sensor');
import { 
  EventMessage, EventMessageType, Logger, MqttMessage, MqttGateway, 
  SystemNodeConfiguration, Component, SystemConfiguration } from '@grow/common';

export class TemperatureHumidityAction {

  private _logger: Logger;
  private _gateway: MqttGateway
  private _node: SystemNodeConfiguration;
  private _component: Component;
  private _interval: any;

  constructor(node: SystemNodeConfiguration, component: Component) {
    this._gateway = MqttGateway.getInstance();
    this._node = node;
    this._component = component;
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
    }, this._component.preferences.interval);
  }

  stop(): void {
    if(this._interval)
      clearInterval(this._interval);
  }

  setInterval(value: number): void {
    this.stop();
    this._component.preferences.interval = value;
  }

  setThreshold(value: number): void {
    this._component.preferences.threshold = value;
  }

  _notify(temperature: number, humidity: number): void {
    const componentState = this._buildState(temperature, humidity, null);
    const event = new EventMessage(EventMessageType.TEMPHUM_STATE_CHANGED, componentState);
    const message = new MqttMessage('system/node/event/temphum', event);

    this._gateway.outbound(message);

    if(temperature > this._component.preferences.threshold.max || temperature < this._component.preferences.threshold.min) {
      const text = `[${this._node.name}][${this._component.alias}] - Temperature went beyond threshold`;
      const componentState = this._buildState(temperature, humidity, text);
      //const event = new EventMessage(EventMessageType.NOTIFICATION, componentState);
      //const notification = new MqttMessage('system/node/event/notification', this.buildMessage(temperature, humidity));
      
      //this._gateway.outbound(notification);
    }
  }

  _buildState(temperature: number, humidity: number, message: any): any {
    return { 
      id: this._component.id,
      alias: this._component.alias,
      preferences: this._component.preferences,
      type: this._component.type,
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
    this._logger.debug(`Destroying temperature-humidity action, ${this._component.alias}`);
    this.stop();
  }

}
