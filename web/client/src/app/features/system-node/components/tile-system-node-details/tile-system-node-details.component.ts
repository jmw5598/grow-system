import { Component, OnInit, Input } from '@angular/core';

import { SystemNode } from '@core/store';
import { ChartColor, StrokeColor } from '@shared/components';

@Component({
  selector: 'gs-tile-system-node-details',
  templateUrl: './tile-system-node-details.component.html',
  styleUrls: ['./tile-system-node-details.component.scss']
})
export class TileSystemNodeDetailsComponent implements OnInit {

  @Input()
  public node: SystemNode;

  public ChartColor = ChartColor;
  public StrokeColor = StrokeColor;

  constructor() { }

  ngOnInit() {}

  // moves this to a pipe? include days?
  toHoursMinutesSeconds(seconds: number) {
    if (!seconds) return null;

    let s:any = seconds
    let d:any = String(Math.floor(s / 86400));

    s %= 86400;

    let h:any = String(Math.floor(s / 3600)).padStart(2, "0");

    s %= 3600;

    let m:any = String(Math.floor(s / 60)).padStart(2, "0");
    s = String(s %= 60).padStart(2, "0");

    return d + ' days & ' + h + ':' + m + ':' + s;
  }

  // move to a pipe?
  toMegabytes(bytes: number) {
    if (!bytes) return null;

    return ((bytes / 1024) / 1024).toFixed(2) + ' MB';
  }

  calcFreeMemPercent(node: any) {
    if (!node || !node.details || !node.details.totalmem || !node.details.freemem) 
      return 0;
    const percent = (node.details.totalmem - node.details.freemem) / node.details.totalmem * 100
    return Math.floor(percent);
  }

  calcCoreLoad(core) {
    const times = core.times;
    const used = times.irq + times.nice + times.sys + times.user;
    const total = used + times.idle;
    return Math.ceil(used / total * 100);
  }

}
