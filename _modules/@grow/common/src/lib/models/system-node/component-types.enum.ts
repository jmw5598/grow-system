import { IComponentType } from './component-type.interface';

export class ComponentTypes {
  public readonly SRD05: IComponentType = <IComponentType> {
    model: 'SRD05',
    description: 'relay'
  };

  public readonly DHT22: IComponentType = <IComponentType>{
    model: 'DHT22',
    description: 'temperature/humidity'
  };
}
