import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GsCommonModule } from '@gs/common';
import { SharedModule } from '../../shared/shared.module';
import { SystemNodeRoutingModule } from './system-node-routing.module';

import { SystemNodeComponent } from './pages/system-node/system-node.component';
import { RelayGroupComponent } from './components/relay-group/relay-group.component';

@NgModule({
  declarations: [
    SystemNodeComponent,
    RelayGroupComponent
  ],
  imports: [
    CommonModule,
    GsCommonModule,
    SharedModule,
    SystemNodeRoutingModule
  ]
})
export class SystemNodeModule { }
