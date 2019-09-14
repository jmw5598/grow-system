'use strict';

class EventMessage {
  constructor(event, payload) {
    this.event = event;
    this.payload = payload;
  }
}

module.exports = EventMessage;