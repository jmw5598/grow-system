import { Component, Logger, SystemNodeConfiguration } from '@grow/common';

import { ProximityAction, TemperatureHumidityAction, RelayAction } from './actions';

export class ActionFactory {
  public static create(model: string, node: SystemNodeConfiguration, component: Component) {
    switch(model) {
      case 'SRD05': return new RelayAction(node, component);
      case 'DHT22': return new TemperatureHumidityAction(node, component);
      case 'HCSR04': return new ProximityAction(node, component);
      default: console.log('Invalid component type'); break;
    }
  }
}
