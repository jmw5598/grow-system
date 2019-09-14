import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard.routing';
import { SharedModule } from '@shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardPanelLeftComponent } from './dashboard-panel-left/dashboard-panel-left.component';
import { DashboardPanelRightComponent } from './dashboard-panel-right/dashboard-panel-right.component';

import { SensorsComponent } from './sensors/sensors.component';
import { CreateComponentFormComponent } from './components/create-component-form/create-component-form.component';

@NgModule({
  declarations: [DashboardComponent, DashboardPanelLeftComponent, DashboardPanelRightComponent, SensorsComponent, CreateComponentFormComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
