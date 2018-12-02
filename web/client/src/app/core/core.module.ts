import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from './services/authentication.service';

import { AuthenticationGuard } from './guards/authentication.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard
  ]
})
export class CoreModule { }
