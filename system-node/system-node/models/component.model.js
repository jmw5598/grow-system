'use strict';

class Component {

  constructor(id, alias, type, pin, state, preferences) {
    this.id = id;
    this.alias = alias;
    this.type = type;
    this.pin = pin;
    this.state = state;
    this.preferences = preferences;
  }

}

module.exports = Component;