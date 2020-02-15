import { IComponentType } from '@grow/common';

export class ComponentAction {
  constructor(public id: string, public alias: string, public type: IComponentType, public pin: number) {}
}
