import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogosPageComponent } from './catalogos-page/catalogos-page.component';
import * as pages from './pages';

import {
  LineasGuard,
  ClasesGuard,
  MarcasGuard,
  ProductosGuard,
  ClientesGuard,
  ProveedoresGuard,
  AduanasGuard
} from './guards';

const routes: Routes = [
  {
    path: 'catalogos',
    component: CatalogosPageComponent,
    children: [
      {
        path: 'lineas',
        canActivate: [LineasGuard],
        component: pages.LineasPageComponent
      },
      {
        path: 'clases',
        canActivate: [ClasesGuard],
        component: pages.ClasesPageComponent
      },
      {
        path: 'marcas',
        canActivate: [MarcasGuard],
        component: pages.MarcasPageComponent
      },
      {
        path: 'productos',
        canActivate: [ProductosGuard],
        component: pages.ProductosPageComponent
      },
      {
        path: 'clientes',
        canActivate: [ClientesGuard],
        component: pages.ClientesPageComponent
      },
      {
        path: 'proveedores',
        canActivate: [ProveedoresGuard],
        component: pages.ProveedoresPageComponent
      },
      {
        path: 'aduanas',
        canActivate: [AduanasGuard],
        component: pages.AduanasPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule {}
