import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomePageComponent } from './core/home-page/home-page.component';
import { MainPageComponent } from './core/components/main-page/main-page.component';

import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'inicio', component: HomePageComponent },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      /*
      {
        path: 'catalogos',
        loadChildren: './catalogos/catalogos.module#CatalogosModule'
      },
      */
      {
        path: 'importaciones',
        loadChildren: './importaciones/importaciones.module#ImportacionesModule'
      },
      {
        path: 'cxp',
        loadChildren: './cxp/cxp.module#CxpModule'
      },
      {
        path: 'cxc',
        loadChildren: './cxc/cxc.module#CxcModule'
      },
      {
        path: 'tesoreria',
        loadChildren: './tesoreria/tesoreria.module#TesoreriaModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
