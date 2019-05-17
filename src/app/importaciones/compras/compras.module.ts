import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasPageComponent } from './pages/compras-page/compras-page.component';
import { ComprasTableComponent } from './components';

@NgModule({
  declarations: [ComprasPageComponent, ComprasTableComponent],
  imports: [SharedModule, ComprasRoutingModule]
})
export class ComprasModule {}
