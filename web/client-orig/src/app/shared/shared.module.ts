import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { LayoutThreeColumnComponent } from './components/layout-three-column/layout-three-column.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';

import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';

import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
  declarations: [
    AlertMessageComponent,
    LayoutThreeColumnComponent,
    SidePanelComponent,
    ToggleSwitchComponent
  ],
  exports: [
    AlertMessageComponent,
    LayoutThreeColumnComponent,
    SidePanelComponent,
    ToggleSwitchComponent
  ],
  imports: [
    CommonModule,
    UiSwitchModule
  ]
})
export class SharedModule { }
