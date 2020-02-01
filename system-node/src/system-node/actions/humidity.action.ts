import { Component, Logger, MqttGateway, SystemNodeConfiguration } from '@grow/common';

export class HumidityAction {

  private logger: Logger;
  private node: SystemNodeConfiguration;
  private config: Component;
  private preferences: any;

  private interval: any;

  constructor(node: SystemNodeConfiguration, config: Component) {
    this.node = node;
    this.config = config
    this.logger = new Logger(this.constructor.name);
    this.start();
  }

  start(): void {
    this.interval = setInterval(() => {
      console.log('HumidityAction::Alias:' + this.config.alias);
      console.log('HumidityAction::Taking reading');
      console.log('HumidityAction::Publishing reading');
    }, this.preferences.interval)
  }

  stop(): void {
    if(this.interval)
      clearInterval(this.config.interval);
  }

  setInterval(value: number): void {
    this.stop();
    this.config.preferences.interval = value;
    this.start();
  }

  setThreshold(value: number): void {
    this.config.preferences.threshold = value;
  }

  destroy(): void {
    this.stop();
  }

}
