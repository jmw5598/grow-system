import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemNodeComponent } from './pages/system-node/system-node.component';

const routes: Routes = [
  {
    path: '',
    component: SystemNodeComponent
  },
  {
    path: '**',
    redirectTo: 'system-node',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemNodeRoutingModule {}