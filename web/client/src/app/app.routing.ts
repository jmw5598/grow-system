import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardRoutingModule } from '@app/dashboard/dashboard.routing';

import { AuthenticationGuard } from '@core/guards/authentication.guard';
import { LoginComponent } from '@app/login/login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthenticationGuard],
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
