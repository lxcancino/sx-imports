import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogosPageComponent } from './catalogos-page/catalogos-page.component';

const routes: Routes = [{ path: '', component: CatalogosPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule {}
