import { RPiComponent } from './rpi-component.model';
import { TemperatureHumidityDetails } from './temperature-humidity-details.model';
import { TemperatureHumidityPreferences } from './temperature-humidity-preferences.model';

export class TemperatureHumidityComponent extends RPiComponent {
  public details: TemperatureHumidityDetails;
  public preferences: TemperatureHumidityPreferences;
}