import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprasPageComponent } from './pages/compras-page/compras-page.component';
import { ComprasGuard, CompraExistsGuard } from './guards';
import { CompraComponent } from './pages/compra/compra.component';

const routes: Routes = [
  { path: '', canActivate: [ComprasGuard], component: ComprasPageComponent },
  { path: 'create', component: CompraComponent },
  {
    path: ':compraId',
    canActivate: [CompraExistsGuard],
    component: CompraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule {}
