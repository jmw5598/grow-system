import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';

export interface ISystemNode {
  id: number;
  alias: number;
  components: any[];
}