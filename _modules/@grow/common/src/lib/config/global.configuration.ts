import { SystemConfiguration } from "./system.configuration";
import { SystemNodeConfiguration } from './system-node-configuration';

export class GlobalConfiguration {
  constructor(
    public system: SystemConfiguration,
    public node: SystemNodeConfiguration
  ) {}
}