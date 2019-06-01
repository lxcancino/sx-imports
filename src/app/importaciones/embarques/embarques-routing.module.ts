import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmbarquesPageComponent, EmbarquePageComponent } from './pages';
import { EmbarquesGuard, EmbarqueExistsGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [EmbarquesGuard],
    component: EmbarquesPageComponent
  },
  {
    path: ':embarqueId',
    canActivate: [EmbarqueExistsGuard],
    component: EmbarquePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmbarquesRoutingModule {}
