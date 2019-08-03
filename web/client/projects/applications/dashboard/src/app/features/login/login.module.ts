import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GsCommonModule } from '@gs/common';
import { SharedModule } from '../../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GsCommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LoginModule { }
