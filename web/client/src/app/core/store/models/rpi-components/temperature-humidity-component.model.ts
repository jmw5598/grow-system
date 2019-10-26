import { RPiComponent } from './rpi-component.model';
import { TemperatureHumidityDetails } from './temperature-humidity-details.model';

export class TemperatureHumidityComponent extends RPiComponent {
  public details: TemperatureHumidityDetails;
}