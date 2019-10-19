import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemNodeComponent } from './pages/system-node/system-node.component';

const routes: Routes = [
  {
    path: ':id',
    component: SystemNodeComponent
  },
  {
    path: '**',
    redirectTo: '/system',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemNodeRoutingModule {}