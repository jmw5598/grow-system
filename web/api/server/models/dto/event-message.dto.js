'use strict';

class EventMessage {

  constructor(payload, type = 'message') {
    this.payload = payload;
    this.type = type;
  }

}

module.exports = EventMessage;
