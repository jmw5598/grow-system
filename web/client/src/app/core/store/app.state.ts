import { SystemNode } from './models/system-node.model';
import { RelayComponent } from './models/rpi-components/relay-component.model';

export class AppState {
  readonly nodes: SystemNode[];
  readonly relays: RelayComponent[];
}