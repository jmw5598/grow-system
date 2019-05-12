'use strict';

const Gpio = require('onoff').Gpio;
const ComponentAction = require('./component.action');
const { MqttGateway } = require('../messaging');
const { MqttMessage } = require('../messaging/models');

class RelayAction extends ComponentAction {

  constructor(config) {
    super(config.id, config.alias, config.type, config.pin);
    this.state = config.state;
    this.relay = new Gpio(this.pin, 'out');
    this.toggle('off');
  }

  toggle(state) {
    switch(state.toLowerCase()) {
      case 'on':
        this.state = state.toLowerCase();
        this.relay.writeSync(0, this._notify(state));
        break;
      case 'off':
        this.state = state.toLowerCase();
        this.relay.writeSync(1, this._notify(state));
        break;
      default:
        console.log('[System-Node] RelayAction::State not recognized');
        break;
    }
  }

  _notify(state) {
    console.log("[SystemNode] Sending updated value after relay action");
    const message = new MqttMessage('system/system-node/event/relay', "message");
    MqttGateway.outbound(message);
  }

}

module.exports = RelayAction;
