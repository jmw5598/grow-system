import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemNodeListComponent } from './pages/system-node-list/system-node-list.component';

const routes: Routes = [
	{
		path: '',
		component: SystemNodeListComponent
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
export class SystemRoutingModule {}