import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprasPageComponent } from './pages/compras-page/compras-page.component';
import { ComprasGuard } from './guards';

const routes: Routes = [
  { path: '', canActivate: [ComprasGuard], component: ComprasPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule {}
