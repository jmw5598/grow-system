'use strict';

//const usonic = require('mmm-usonic-fixed');

import { Component, Logger, SystemNodeConfiguration } from '@grow/common';

export class ProximityAction {
  private _logger: Logger;
  private _node: any;
  private _component: Component;

  constructor(node: SystemNodeConfiguration, component: Component) {
    this._logger = new Logger(this.constructor.name);
    this._node = node;
    this._component = component;
    //https://www.npmjs.com/package/mmm-usonic-fixed
  }

  /*eslint no-empty: "error"*/
  start(): void {
    /* empty */
  }

  /*eslint no-empty: "error"*/
  stop(): void {
    /* empty */
  }

  /*eslint no-empty: "error"*/
  setInterval(value: number): void {
    /* empty */
  }

  /*eslint no-empty: "error"*/
  setThreshold(value: number): void {
    /* empty */
  }

  destroy(): void {
    this._logger.debug('Destroying proximity sensor');
    this.stop();
  }
}
