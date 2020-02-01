import { ComponentType } from './component-type.enum';
import { PinState } from './pin-state.enum';
export declare class Component {
    id: string;
    alias: string;
    type: ComponentType;
    pin: number;
    state: PinState;
    preferences: any;
    constructor(id: string, alias: string, type: ComponentType, pin: number, state: PinState, preferences: any);
}
