'use strict';

const { SseEmitterService } =  require('../../services');

class SseController {

  constructor() {}

  subscribe(req, res) {
    SseEmitterService.addEmitter(res);
  }

  // Used for testing event mitter service.
  // Should be removed later
  publish(req, res) {
    let message = req.body.message;
    SseEmitterService.emit(message);
    return res.status(200).send();
  }

}

module.exports = new SseController();
