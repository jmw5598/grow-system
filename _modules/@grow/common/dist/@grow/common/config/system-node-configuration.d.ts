import { Component } from '../models/system-node/component.model';
export declare class SystemNodeConfiguration {
    id: string;
    name: string;
    description: string;
    components: Component[];
    constructor(id: string, name: string, description: string, components: Component[]);
}
