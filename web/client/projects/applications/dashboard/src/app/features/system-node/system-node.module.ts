import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemNodeRoutingModule } from './system-node-routing.module';

import { SystemNodeComponent } from './pages/system-node/system-node.component';

@NgModule({
  declarations: [
    SystemNodeComponent
  ],
  imports: [
    CommonModule,
    SystemNodeRoutingModule
  ]
})
export class SystemNodeModule { }
