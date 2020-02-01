'use strict';

const EventMessage = require('../messaging/models').EventMessage;
const EventMessageType = require('../messaging/models/event-message-type.model');
const Gpio = require('onoff').Gpio;
const Logger = require('../utilities').Logger;
const MqttGateway = require('../messaging/gateways/mqtt.gateway');
const MqttMessage = require('../messaging/models').MqttMessage;

class RelayAction {

  constructor(node, config) {
    this.node = node; 
    this.config = config;
    this.logger = new Logger(this.constructor.name);
    this.relay = new Gpio(this.config.pin, 'out');
    this.toggle('off');
  }

  toggle(state) {
    this.logger.debug(`Toggling relay: ${this.config.alias} - ${state}`);
    switch(state.toLowerCase()) {
      case 'on':
        this.config.state = state.toLowerCase();
        this.relay.writeSync(0, this._notify(state));
        break;
      case 'off':
        this.config.state = state.toLowerCase();
        this.relay.writeSync(1, this._notify(state));
        break;
      default:
        console.log('[System-Node] RelayAction::State not recognized');
        break;
    }
  }

  _notify(state) {
    this.logger.debug(`Sending to new stat (${this.config.alias} : ${state})`);
    const componentState = this._buildState();
    const event = new EventMessage(EventMessageType.RELAY_STATE_CHANGED, componentState);
    const message = new MqttMessage('system/node/event/relay', event);
    MqttGateway.outbound(message);
  }

  _buildState() {
    return { 
      id: this.config.id,
      alias: this.config.alias,
      preferences: this.config.preferences,
      type: this.config.type,
      status: {
        state: this.config.state,
        timestamp: new Date()
      },
      nodeId: this.node.id, 
    }
  }

  destroy() {
    this.logger.debug(`Destroying relay ${this.config.alias}`);
    this.toggle('off');
    this.relay.unexport();
  }

}

module.exports = RelayAction;
