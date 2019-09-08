import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { GsCoreModuleConfig } from './gs-core.config';
import { GS_CORE_CONFIG } from './gs-core.token';

import { AbstractCrudService } from './services/abstract-crud.service';
import { AuthenticationService } from './services/authentication.service';
import { RelayService } from './services/relay.service';
import { SseService } from './services/sse.service';
import { ToasterService } from './components/toaster/toaster.service';

import { ToasterComponent } from './components/toaster/toaster.component';
import { ICrud } from './services/crud.interface';

@NgModule({
  declarations: [
    ToasterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToasterComponent
  ],
  providers: [
    AuthenticationService,
    RelayService,
    SseService,
    ToasterService
  ]
})
export class GsCoreModule {
  static forRoot(config: GsCoreModuleConfig): ModuleWithProviders {
    return {
      ngModule: GsCoreModule,
      providers: [
        { provide: GS_CORE_CONFIG, useValue: config } 
      ]
    };
  }
}