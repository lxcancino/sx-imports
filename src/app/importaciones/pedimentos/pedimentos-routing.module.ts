import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedimentosPageComponent } from './pages';
import { PedimentosGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [PedimentosGuard],
    component: PedimentosPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedimentosRoutingModule {}
