import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RelayComponentReducer } from './store/reducers/relay-component.reducer';
import { RelayService } from './services/relay.service';
import { SseService } from './services/sse.service';
import { StoreModule } from '@ngrx/store';
import { SystemNodeReducer, RelayComponent } from '@core/store';
import { ToasterComponent } from './components/toaster/toaster.component';
import { ToasterService } from './components/toaster/toaster.service';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    NavigationBarComponent,
    ToasterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forRoot({
      nodes: SystemNodeReducer,
      relays: RelayComponentReducer
    })
  ],
  exports: [
    BreadcrumbsComponent,
    NavigationBarComponent,
    ToasterComponent
  ],
  providers: [
    AuthenticationService,
    RelayService,
    SseService,
    ToasterService
  ]
})
export class CoreModule { }
