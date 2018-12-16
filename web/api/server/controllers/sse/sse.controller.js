'use strict';

const { SseEmitterService } =  require('../../services');

class SseController {

  constructor() {}

  subscribe(req, res) {
    SseEmitterService.addEmitter(res.sse.setup());
    SseEmitterService.emit({ message: "This is a test" });
  }

}

module.exports = new SseController();
