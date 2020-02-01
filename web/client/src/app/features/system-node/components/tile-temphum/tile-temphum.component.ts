import { Component, OnInit, Input } from '@angular/core';

import { TemperatureHumidityComponent } from '@core/store';
import { ChartColor } from '@shared/components';

@Component({
  selector: 'gs-tile-temphum',
  templateUrl: './tile-temphum.component.html',
  styleUrls: ['./tile-temphum.component.scss']
})
export class TileTemphumComponent implements OnInit {

  @Input()
  public sensor: TemperatureHumidityComponent;

  public ChartColor = ChartColor
  public color: ChartColor = ChartColor.PRIMARY;
  public percent: number = 50;

  constructor() { }

  ngOnInit() {
    
  }

  generateChartColor(): ChartColor {
    if (!this.sensor) return ChartColor.DANGER;

    const upper = this.sensor.preferences.threshold.max;
    const lower = this.sensor.preferences.threshold.max;
    const value = this.sensor.details.temperature;

    let color: ChartColor = ChartColor.PRIMARY;
    
    if (value >= upper) 
      return ChartColor.DANGER;
    else if ( value <= lower)
      return ChartColor.INFO;

    return color;
  }

  toInteger(value: any) {
    return Math.floor(value);
  }

}
