import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './features/login/login.module#LoginModule'
  },
  {
    path: 'system',
    loadChildren: './features/system/system.module#SystemModule'
  },
  {
    path: 'system-node',
    loadChildren: './features/system-node/system-node.module#SystemNodeModule'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
