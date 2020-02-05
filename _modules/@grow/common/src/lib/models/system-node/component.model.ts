import { IComponentType } from './component-type.interface';
import { PinState } from './pin-state.enum';

export class Component {
  constructor(
    public id: string,
    public alias: string,
    public type: IComponentType,
    public pin: number,
    public state: PinState,
    // @@@ Create preferences class for each kind
    // @@@ Create type alias for all preferecnes type and tyep that here
    public preferences: any,
  ) {}
}
