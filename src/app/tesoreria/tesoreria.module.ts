import { NgModule } from '@angular/core';

import { TesoreriaRoutingModule } from './tesoreria-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@app/layout/layout.module';

import { TesoreriaPageComponent } from './pages/tesoreria-page/tesoreria-page.component';

@NgModule({
  declarations: [TesoreriaPageComponent],
  imports: [SharedModule, LayoutModule, TesoreriaRoutingModule]
})
export class TesoreriaModule {}
