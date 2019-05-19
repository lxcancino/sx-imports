import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasPageComponent } from './pages/compras-page/compras-page.component';
import { components, entryComponents } from './components';

@NgModule({
  imports: [SharedModule, ComprasRoutingModule],
  declarations: [ComprasPageComponent, ...components, ...entryComponents],
  entryComponents: [...entryComponents]
})
export class ComprasModule {}
