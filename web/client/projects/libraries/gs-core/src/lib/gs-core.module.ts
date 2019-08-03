import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { GsCoreModuleConfig } from './gs-core.config';
import { GS_CORE_CONFIG } from './gs-core.token';

import { AbstractCrudService } from './services/abstract-crud.service';
import { AuthenticationService } from './services/authentication.service';
import { RelayService } from './services/relay.service';
import { SseService } from './services/sse.service';

import { ICrud } from './services/crud.interface';


@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    AuthenticationService,
    RelayService,
    SseService
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