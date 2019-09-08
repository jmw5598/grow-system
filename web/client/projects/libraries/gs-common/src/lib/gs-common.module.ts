import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UiSwitchModule } from 'ngx-ui-switch';

import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { KeysPipe } from './pipes/keys.pipe';
import { LayoutThreeColumnComponent } from './components/layout-three-column/layout-three-column.component';
import { ModalComponent } from './components/modal/modal.component';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';

@NgModule({
  declarations: [
    AlertMessageComponent,
    LayoutThreeColumnComponent,
    ModalComponent,
    SidePanelComponent,
    ToggleSwitchComponent,
    KeysPipe
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
    KeysPipe,
    LayoutThreeColumnComponent,
    ModalComponent,
    SidePanelComponent,
    ToggleSwitchComponent,
  ]
})
export class GsCommonModule { }
