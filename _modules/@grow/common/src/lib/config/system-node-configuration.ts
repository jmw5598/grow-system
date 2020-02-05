import { Component } from '../models/system-node/component.model';

export class SystemNodeConfiguration {
  constructor(public id: string, public name: string, public description: string, public components: Component[]) {}
}
