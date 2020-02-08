import { StatusType } from './status-type.enum';

export class SystemNodeStatus {
  constructor(public state: StatusType, public timestamp: Date) {}
}
