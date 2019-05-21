import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasPageComponent } from './pages/compras-page/compras-page.component';

import { components, entryComponents } from './components';
import { CompraComponent } from './pages/compra/compra.component';

import { SxiComprasModule } from 'sxi-compras';

@NgModule({
  imports: [SharedModule, ComprasRoutingModule, SxiComprasModule],
  declarations: [
    ComprasPageComponent,
    CompraComponent,
    ...components,
    ...entryComponents
  ],
  entryComponents: [...entryComponents]
})
export class ComprasModule {}
