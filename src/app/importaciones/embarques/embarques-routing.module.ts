import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmbarquesPageComponent } from './pages';
import { EmbarquesGuard } from './guards';

const routes: Routes = [
  { path: '', canActivate: [EmbarquesGuard], component: EmbarquesPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmbarquesRoutingModule {}
