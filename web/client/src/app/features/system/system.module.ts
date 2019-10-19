import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';

import { SystemNodeListComponent } from './pages/system-node-list/system-node-list.component';
import { SystemNodeDetailsComponent } from './components/system-node-details/system-node-details.component';

@NgModule({
  declarations: [SystemNodeListComponent, SystemNodeDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
