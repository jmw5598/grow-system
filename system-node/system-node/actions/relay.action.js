'use strict';

const Gpio = require('onoff').Gpio;
const ComponentAction = require('./component.action');
const Logger = require('../utilities').Logger;
const MqttGateway = require('../messaging/gateways/mqtt.gateway');
const MqttMessage = require('../messaging/models').MqttMessage;

class RelayAction extends ComponentAction {

  constructor(config) {
    super(config.id, config.alias, config.type, config.pin);
    this.logger = new Logger(this.constructor.name);
    this.state = config.state;
    this.relay = new Gpio(this.pin, 'out');
    this.toggle('off');
  }

  toggle(state) {
    this.logger.debug(`Toggling relay: ${this.alias} - ${state}`);
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
    this.logger.debug(`Sending to new stat (${this.alias} : ${state})`);
    const message = new MqttMessage('system/system-node/event/relay', "message");
    MqttGateway.outbound(message);
  }

  destroy() {
    this.logger.debug(`Destroying relay ${this.alias}`);
    this.toggle('off');
    this.relay.unexport();
  }

}

module.exports = RelayAction;
