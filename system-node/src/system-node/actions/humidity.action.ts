import { Component, Logger, MqttGateway, SystemNodeConfiguration } from '@grow/common';

export class HumidityAction {

  private _logger: Logger;
  private _node: SystemNodeConfiguration;
  private _component: Component;
  private _preferences: any;

  private _interval: any;

  constructor(node: SystemNodeConfiguration, component: Component) {
    this._node = node;
    this._component = component
    this._logger = new Logger(this.constructor.name);
    this.start();
  }

  start(): void {
    this._interval = setInterval(() => {
      console.log('HumidityAction::Alias:' + this._component.alias);
      console.log('HumidityAction::Taking reading');
      console.log('HumidityAction::Publishing reading');
    }, this._preferences.interval)
  }

  stop(): void {
    if(this._interval)
      clearInterval(this._interval);
  }

  setInterval(value: number): void {
    this.stop();
    this._component.preferences.interval = value;
    this.start();
  }

  setThreshold(value: number): void {
    this._component.preferences.threshold = value;
  }

  destroy(): void {
    this.stop();
  }

}
