import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UiSwitchModule } from 'ngx-ui-switch';

import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';

@NgModule({
  declarations: [
    AlertMessageComponent,
    ToggleSwitchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
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
    ToggleSwitchComponent
  ]
})
export class GsCommonModule { }
