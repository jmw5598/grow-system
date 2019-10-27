import { Component, OnInit, Input } from '@angular/core';
import { StrokeColor } from '../shared/stroke-color.enum';

@Component({
  selector: 'gs-chart-percentage-circle',
  templateUrl: './chart-percentage-circle.component.html',
  styleUrls: ['./chart-percentage-circle.component.scss']
})
export class ChartPercentageCircleComponent implements OnInit {

  @Input()
  public color: StrokeColor;

  @Input()
  public title: string;

  @Input()
  public unit: string;

  @Input()
  public set value(value: number) {
    this.percentage = value;
    this.fill = `${value}, 100`;
  }

  public percentage: number;
  public fill: string;

  constructor() {
    this.value = 20;
    this.color = StrokeColor.INFO;
  }

  ngOnInit() {
  }

}
