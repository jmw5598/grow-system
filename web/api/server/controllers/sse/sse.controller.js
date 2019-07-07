'use strict';

const Logger = require('../../utilities').Logger;
const SseEmitterService =  require('../../services').SseEmitterService;

class SseController {

  constructor() {
    this.logger = new Logger(this.constructor.name);
  }

  subscribe(req, res) {
    this.logger.debug(`Adding new subscriber to SSE events`);
    SseEmitterService.addEmitter(res);
  }

}

module.exports = new SseController();
