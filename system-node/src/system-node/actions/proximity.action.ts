'use strict';

//const usonic = require('mmm-usonic-fixed');

import { Component, Logger, SystemNodeConfiguration } from '@grow/common';

export class ProximityAction {

  private _logger: Logger;
  private _node: any;
  private _component: Component;

  constructor(node:  SystemNodeConfiguration, component: Component) {
    this._logger = new Logger(this.constructor.name);
    this._node = node;
    this._component = component;
    //https://www.npmjs.com/package/mmm-usonic-fixed
  }

  start(): void {

  }

  stop(): void {

  }

  setInterval(value: number): void {

  }

  setThreshold(value: number): void {

  }

  destroy(): void {
    this._logger.debug(`Destroying proximity sensor`);
    this.stop();
  }

}
