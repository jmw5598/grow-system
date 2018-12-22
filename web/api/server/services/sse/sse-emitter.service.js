'use strict';

class SseEmitterService {

  constructor() {
    this.connections = [];
  }

  addEmitter(emitter) {
    emitter.on('close', () => this.removeEmitter(emitter));
    emitter.sseSetup();
    emitter.sseSend("OK");
    this.connections.push(emitter);
  }

  removeEmitter(emitter) {
    emitter.finished = true;
    this.connections = this.connections.filter(e => !e.finished);
  }

  emit(payload) {
    let data = JSON.stringify(payload);
    this.connections.forEach(e => e.sseSend(data));
  }

}

module.exports = new SseEmitterService();
