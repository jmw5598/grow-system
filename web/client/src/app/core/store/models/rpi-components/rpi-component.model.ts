import { Status } from '../shared/status.model';

export abstract class RPiComponent {
  public id: string;
  public alias: string;
  public pin: number;
  public status: Status;
}