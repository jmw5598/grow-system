import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemNodeListComponent } from './pages/system-node-list/system-node-list.component';

const routes: Routes = [
	{
		path: 'list',
		component: SystemNodeListComponent
	},
	{
		path: '**',
		redirectTo: 'list',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SystemRoutingModule {}