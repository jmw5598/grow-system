'use strict';

//const usonic = require('mmm-usonic-fixed');

import { Logger } from '@grow/common';

export class ProximityAction {

  private _logger: Logger;
  private _node: any;
  private _config: any;

  constructor(node, config) {
    this._logger = new Logger(this.constructor.name);
    this._node = node;
    this._config = config;
    //https://www.npmjs.com/package/mmm-usonic-fixed
  }

  start(): void {

  }

  stop(): void {

  }

  setInterval(value): void {

  }

  setThreshold(value): void {

  }

  destroy(): void {
    this._logger.debug(`Destroying proximity sensor`);
    this.stop();
  }

}
