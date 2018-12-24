import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard.routing';
import { SharedModule } from '@shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardPanelLeftComponent } from './dashboard-panel-left/dashboard-panel-left.component';
import { DashboardPanelRightComponent } from './dashboard-panel-right/dashboard-panel-right.component';

@NgModule({
  declarations: [DashboardComponent, DashboardPanelLeftComponent, DashboardPanelRightComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
