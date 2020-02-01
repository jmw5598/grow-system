import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { SystemNodeRoutingModule } from './system-node-routing.module';

import { ComponentFormAddComponent } from './components/component-form-add/component-form-add.component';
import { PreferencesFormTemperatureHumidityComponent } from './components/preferences-form-temperature-humidity/preferences-form-temperature-humidity.component';
import { PreferencesFormRelayComponent } from './components/preferences-form-relay/preferences-form-relay.component';
import { PreferencesFormProximityComponent } from './components/preferences-form-proximity/preferences-form-proximity.component';
import { RelayGroupComponent } from './components/relay-group/relay-group.component';
import { SystemNodeComponent } from './pages/system-node/system-node.component';
import { TileSystemNodeDetailsComponent } from './components/tile-system-node-details/tile-system-node-details.component';
import { TileRelaysComponent } from './components/tile-relays/tile-relays.component';
import { TileTemphumComponent } from './components/tile-temphum/tile-temphum.component';


@NgModule({
  declarations: [
    ComponentFormAddComponent,
    PreferencesFormTemperatureHumidityComponent,
    PreferencesFormRelayComponent,
    PreferencesFormProximityComponent,
    RelayGroupComponent,
    SystemNodeComponent,
    TileSystemNodeDetailsComponent,
    TileRelaysComponent,
    TileTemphumComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SystemNodeRoutingModule
  ]
})
export class SystemNodeModule { }
