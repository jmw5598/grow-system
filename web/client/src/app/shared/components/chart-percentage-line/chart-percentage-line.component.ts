import { Component, OnInit, Input } from '@angular/core';
import { ChartColor } from '../shared/chart-color.enum';

@Component({
  selector: 'gs-chart-percentage-line',
  templateUrl: './chart-percentage-line.component.html',
  styleUrls: ['./chart-percentage-line.component.scss']
})
export class ChartPercentageLineComponent implements OnInit {

  @Input()
  public value: number;

  @Input()
  public color: ChartColor;

  constructor() {
    this.value = 0;
    this.color = ChartColor.INFO;
  }

  ngOnInit() {
    console.log(this.color);
  }

}
