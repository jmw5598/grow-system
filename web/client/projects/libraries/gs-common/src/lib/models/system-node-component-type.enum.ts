import { ComponentModel } from './component-model.model';
export class SystemNodeComponentType {
  public static SRD05: ComponentModel = { model: 'SRD05', description: 'relay' };
  public static DHT22: ComponentModel = { model: 'DHT22', description: 'temperature/humidity' };
  public static HCSR04: ComponentModel = { model: 'HCSR04', description: 'proximity'};
}