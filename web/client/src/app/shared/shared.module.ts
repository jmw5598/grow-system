import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { ModalComponent } from './components/modal/modal.component';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';
import { UiSwitchModule } from 'ngx-ui-switch';


@NgModule({
  declarations: [
    AlertMessageComponent,
    ModalComponent,
    ToggleSwitchComponent
  ],
  imports: [
    CommonModule,
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
    ModalComponent,
    ToggleSwitchComponent
  ]
})
export class SharedModule { }
