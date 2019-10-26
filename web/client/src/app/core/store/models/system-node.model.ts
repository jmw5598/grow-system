import { Status } from './shared/status.model';
import { SystemNodeDetails } from './system-node-details.model';

export class SystemNode {
  public id: string;
  public name: string;
  public details: SystemNodeDetails;
  public status: Status
}