'use strict';

class SseEmitterService {

  constructor() {
    this.connections = [];
  }

  addEmitter(emitter) {
    emitter.on('close', () => this.removeEmitter(emitter));
    emitter.sseSetup();
    emitter.sseSend("");
    this.connections.push(emitter);
  }

  removeEmitter(emitter) {
    emitter.finished = true;
    this.connections = this.connections.filter(e => !e.finished);
  }

  emit(payload) {  
    this.connections.forEach(e => e.sseSend(payload));
  }

}

module.exports = new SseEmitterService();
