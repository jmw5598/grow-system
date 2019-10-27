import { Status } from '../shared/status.model';
import { RPiComponentType } from './rpi-component-type.model';

export abstract class RPiComponent {
  public id: string;
  public alias: string;
  public pin: number;
  public status: Status;
  public type: RPiComponentType;
  public nodeId: number;
}