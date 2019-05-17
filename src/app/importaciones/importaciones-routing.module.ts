import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportacionesPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: ImportacionesPageComponent,
    children: [
      {
        path: 'compras',
        loadChildren: './compras/compras.module#ComprasModule'
      },
      {
        path: 'embarques',
        loadChildren: './embarques/embarques.module#EmbarquesModule'
      },
      {
        path: 'pedimentos',
        loadChildren: './pedimentos/pedimentos.module#PedimentosModule'
      },
      {
        path: 'cuentasDeGasto',
        loadChildren:
          './cuentas-de-gasto/cuentas-de-gstos.module#CuentasDeGastoModule'
      },
      {
        path: 'distribucion',
        loadChildren:
          './distribuciones/distribuciones.module#DistribucionesModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportacionesRoutingModule {}
