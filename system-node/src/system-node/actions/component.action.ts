import { ComponentType } from '@grow/common';

export class ComponentAction {
  constructor(
    public id: string, 
    public alias:string, 
    public type: ComponentType,
    public pin: number
  ) {}
}
