import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { LayoutThreeColumnComponent } from './components/layout-three-column/layout-three-column.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';

@NgModule({
  declarations: [
    AlertMessageComponent,
    LayoutThreeColumnComponent,
    SidePanelComponent
  ],
  exports: [
    AlertMessageComponent,
    LayoutThreeColumnComponent,
    SidePanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
