import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesoreriaPageComponent } from './pages/tesoreria-page/tesoreria-page.component';

const routes: Routes = [{ path: '', component: TesoreriaPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesoreriaRoutingModule {}
