import { TemperatureScale } from '../shared/temperature-scale.enum';
import { Threshold } from '../shared/threshold.model';

export class TemperatureHumidityPreferences {
  scale: TemperatureScale;
  interval: number;
  threshold: Threshold
}