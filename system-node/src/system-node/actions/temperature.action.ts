'use strict';

import { Component, Logger, MqttGateway, SystemNodeConfiguration } from "@grow/common";

export class TemperatureAction {

  private _node: SystemNodeConfiguration;
  private _logger: Logger;
  private _component: Component;
  private _temperature: number;
  private _preferences: any;
  private _interval: any;

  constructor(node: SystemNodeConfiguration, component: Component) {
    this._node = node;
    this._component = component;
    this._logger = new Logger(this.constructor.name);
    this._temperature = 0;
    this._preferences = component.preferences;
    this.start();
  }

  start(): void {
    this._interval = setInterval(() => {
      console.log('TemperatureAction::Alias::' + this._component.alias);
      console.log('TemperatureAction::Taking reading');
      console.log('TemperatureAction::Publishing reading');
    }, this._component.preferences.interval);
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
    this._logger.debug(`Destroying temperature sensor, ${this._component.alias}`);
    this.stop();
  }

}
