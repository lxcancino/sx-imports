import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentasGastoPageComponent } from './pages';
import { CuentasDeGastosGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [CuentasDeGastosGuard],
    component: CuentasGastoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentasDeGastoRoutingModule {}
