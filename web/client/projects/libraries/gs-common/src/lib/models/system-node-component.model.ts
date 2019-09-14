import { SystemNodeComponentState } from './system-node-component-state.enum';
import { SystemNodeComponentType } from './system-node-component-type.enum';

export class SystemNodeComponent {
  public id: number;
  public alias: string;
  public type: SystemNodeComponentType;
  public pin: number;
  public state: SystemNodeComponentState;
  public preferences: any;
}