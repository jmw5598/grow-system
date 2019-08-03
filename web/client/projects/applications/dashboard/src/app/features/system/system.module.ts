import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';

import { SystemNodeListComponent } from './pages/system-node-list/system-node-list.component';

@NgModule({
  declarations: [SystemNodeListComponent],
  imports: [
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
