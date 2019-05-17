import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CxcPageComponent } from './pages/cxc-page/cxc-page.component';

const routes: Routes = [{ path: '', component: CxcPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CxcRoutingModule {}
