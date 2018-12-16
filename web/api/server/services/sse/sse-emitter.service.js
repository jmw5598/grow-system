'use strict';

class SseEmitterService {

  constructor() {
    this.connections = [];
  }

  addEmitter(emitter) {
    this.emitter.on('close', () => this.removeEmitter(emitter));
    this.emitter.on('timeout', () => this.removeEmitter(emitter));
    this.connection.push(emitter);
  }

  removeEmitter(emitter) {
    console.log("removing emitter, ", emitter);
    // TODO: remove emitter from connections array.
  }

  emit(payload) {
    this.connections.forEach(e => e.sse.send(payload));
  }

}
