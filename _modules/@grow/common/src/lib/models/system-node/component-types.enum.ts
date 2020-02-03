import { IComponentType } from './component-type.interface';

export class ComponentTypes {
  public readonly SRD05: IComponentType = {
    model: 'SRD05',
    description: 'relay'
  } as IComponentType;

  public readonly DHT22: IComponentType = {
    model: 'DHT22',
    description: 'temperature/humidity'
  } as IComponentType;
}
