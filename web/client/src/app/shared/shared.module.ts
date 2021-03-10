import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { ChartPercentageCircleComponent } from './components/chart-percentage-circle/chart-percentage-circle.component';
import { ChartPercentageLineComponent } from './components/chart-percentage-line/chart-percentage-line.component';
import { KeysPipe } from './pipes/keys.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';
import { UiSwitchModule } from 'ngx-ui-switch';

import { GridContainerComponent } from './components/grid/grid-container/grid-container.component';
import { GridBoxComponent } from './components/grid/grid-box/grid-box.component';

@NgModule({
  declarations: [
    AlertMessageComponent,
    ChartPercentageCircleComponent,
    ChartPercentageLineComponent,
    KeysPipe,
    ModalComponent,
    ToggleSwitchComponent,
    ChartPercentageCircleComponent,
    ChartPercentageLineComponent,
    GridContainerComponent,
    GridBoxComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    UiSwitchModule.forRoot({
      size: 'small',
      color: '#5CB85C',
      switchColor: '#FFFFFF',
      defaultBgColor: 'transparent',
      defaultBoColor : '#CCC'
    })
  ],
  exports: [
    AlertMessageComponent,
    ChartPercentageCircleComponent,
    ChartPercentageLineComponent,
    GridBoxComponent,
    GridContainerComponent,
    KeysPipe,
    ModalComponent,
    ToggleSwitchComponent,
    UiSwitchModule
  ]
})
export class SharedModule { }
