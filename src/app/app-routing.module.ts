import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './core/home-page/home-page.component';
import { MainPageComponent } from './core/components/main-page/main-page.component';

import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'inicio', component: HomePageComponent },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      {
        path: 'catalogos',
        loadChildren: './catalogos/catalogos.module#CatalogosModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
