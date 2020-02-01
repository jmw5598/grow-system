import { SystemConfiguration } from "./system.configuration";
import { SystemNodeConfiguration } from './system-node-configuration';
export declare class GlobalConfiguration {
    system: SystemConfiguration;
    node: SystemNodeConfiguration;
    constructor(system: SystemConfiguration, node: SystemNodeConfiguration);
}
