import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistribucionesPageComponent } from './pages';
import { DistribucionesGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [DistribucionesGuard],
    component: DistribucionesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistribucionesRoutingModule {}
