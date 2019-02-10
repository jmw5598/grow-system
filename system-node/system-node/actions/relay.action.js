'use strict';

const Gpio = require('onoff').Gpio;
const ComponentAction = require('./component.action');
const { MqttGateway } = require('../messaging');

class RelayAction extends ComponentAction {

  constructor(config) {
    super(config.id, config.alias, config.type, config.pin);
    this.state = config.state;
    this.toggle('off');
    this.relay = new Gpio(this.pin, 'out');
  }

  toggle(state) {
    switch(state.toLowerCase()) {
      case 'on':
        this.state = state.toLowerCase();
        this.relay.writeSync(0);
        break;
      case 'off':
        this.state = state.toLowerCase();
        this.relay.writeSync(1);
        break;
      default:
        console.log('[System-Node] RelayAction::State not recognized');
        break;
    }
  }

}

module.exports = RelayAction;
