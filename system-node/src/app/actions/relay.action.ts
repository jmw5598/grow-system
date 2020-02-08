//const Gpio = require('onoff').Gpio;

import { Component, EventMessage, EventMessageType, MqttGateway, MqttMessage, Logger, PinState, SystemNodeConfiguration } from '@grow/common';

export class RelayAction {

  private _logger: Logger;
  private _gateway: MqttGateway;
  private _node: any;
  private _component: Component;

  constructor(node: SystemNodeConfiguration, component: Component) {
    this._gateway = MqttGateway.getInstance();
    this._node = node; 
    this._component = component;
    this._logger = new Logger(this.constructor.name);
    //this.relay = new Gpio(this.config.pin, 'out');
    //this.toggle('off');
  }

  toggle(state: PinState): void {
    this._logger.debug(`Toggling relay: ${this._component.alias} - ${state}`);
    switch(state) {
      case PinState.ON:
        this._component.state = state;
        //this.relay.writeSync(0, this._notify(state));
        break;
      case PinState.OFF:
        this._component.state = state;
        //this.relay.writeSync(1, this._notify(state));
        break;
      default:
        console.log('[System-Node] RelayAction::State not recognized');
        break;
    }
  }

  _notify(state: PinState): void {
    this._logger.debug(`Sending to new stat (${this._component.alias} : ${state})`);
    const componentState = this._buildState();
    const event = new EventMessage(EventMessageType.RELAY_STATE_CHANGED, componentState);
    const message = new MqttMessage('system/node/event/relay', event);
    this._gateway.outbound(message);
  }

  _buildState(): any {
    return { 
      id: this._component.id,
      alias: this._component.alias,
      preferences: this._component.preferences,
      type: this._component.type,
      status: {
        state: this._component.state,
        timestamp: new Date()
      },
      nodeId: this._node.id, 
    }
  }

  destroy(): void {
    this._logger.debug(`Destroying relay ${this._component.alias}`);
    this.toggle(PinState.OFF);
    //this.relay.unexport();
  }

}
