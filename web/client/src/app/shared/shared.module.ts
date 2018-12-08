import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertMessageComponent } from './components/alert-message/alert-message.component';

@NgModule({
  declarations: [
    AlertMessageComponent
  ],
  exports: [
    AlertMessageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
