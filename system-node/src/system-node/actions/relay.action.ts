//const Gpio = require('onoff').Gpio;

import { EventMessage, EventMessageType, MqttGateway, MqttMessage, Logger, PinState } from '@grow/common';

export class RelayAction {

  private _logger: Logger;
  private _gateway: MqttGateway;
  private _node: any;
  private _config: any;

  constructor(node, config) {
    this._gateway = MqttGateway.getInstance();
    this._node = node; 
    this._config = config;
    this._logger = new Logger(this.constructor.name);
    //this.relay = new Gpio(this.config.pin, 'out');
    //this.toggle('off');
  }

  toggle(state: PinState): void {
    this._logger.debug(`Toggling relay: ${this._config.alias} - ${state}`);
    switch(state) {
      case PinState.ON:
        this._config.state = state.toLowerCase();
        //this.relay.writeSync(0, this._notify(state));
        break;
      case PinState.OFF:
        this._config.state = state.toLowerCase();
        //this.relay.writeSync(1, this._notify(state));
        break;
      default:
        console.log('[System-Node] RelayAction::State not recognized');
        break;
    }
  }

  _notify(state: PinState): void {
    this._logger.debug(`Sending to new stat (${this._config.alias} : ${state})`);
    const componentState = this._buildState();
    const event = new EventMessage(EventMessageType.RELAY_STATE_CHANGED, componentState);
    const message = new MqttMessage('system/node/event/relay', event);
    this._gateway.outbound(message);
  }

  _buildState(): any {
    return { 
      id: this._config.id,
      alias: this._config.alias,
      preferences: this._config.preferences,
      type: this._config.type,
      status: {
        state: this._config.state,
        timestamp: new Date()
      },
      nodeId: this._node.id, 
    }
  }

  destroy(): void {
    this._logger.debug(`Destroying relay ${this._config.alias}`);
    this.toggle('off');
    //this.relay.unexport();
  }

}
