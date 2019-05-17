import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CxpPageComponent } from './pages/cxp-page/cxp-page.component';

const routes: Routes = [{ path: '', component: CxpPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CxpRoutingModule {}
