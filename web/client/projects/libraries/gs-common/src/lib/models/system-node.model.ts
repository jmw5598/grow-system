import { SystemNodeComponent } from './system-node-component.model';

export class SystemNode {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public components: SystemNodeComponent[]
  ) {}
}