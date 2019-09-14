import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { SseService } from '@core/services';

import { FadeAnimation } from '@shared/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [FadeAnimation]
})
export class DashboardComponent implements OnInit {

  private _sseSubscription: Subscription;
  public message: string = '';

  constructor(private _sseService: SseService) { }

  ngOnInit() {
    this._sseSubscription = this._sseService.message
      .subscribe(message => {
        this.message = message.message;
      });
  }

}
