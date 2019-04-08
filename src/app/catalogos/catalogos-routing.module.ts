import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogosPageComponent } from './catalogos-page/catalogos-page.component';
import { ProductosPageComponent } from './pages/productos-page/productos-page.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogosPageComponent,
    children: [{ path: 'productos', component: ProductosPageComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule {}
