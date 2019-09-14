'use strict';

const usonic = require('mmm-usonic-fixed');
const Logger = require('../utilities').Logger;

class ProximityAction {

  contructor(node, config) {
    this.node = node;
    this.config = config;
    //https://www.npmjs.com/package/mmm-usonic-fixed
    this.logger = new Logger(this.constructor.name);
  }

  start() {

  }

  stop() {

  }

  setInterval(value) {

  }

  setThreshold(value) {

  }

  destroy() {
    this.logger.debug(`Destroying proximity sensor`);
    this.stop();
  }

}

module.exports = ProximityAction;
