import { NgModule } from '@angular/core';

import { CompraFormComponent } from './compra-form/compra-form.component';
import { SxiCommonModule } from 'sxi-common';

@NgModule({
  declarations: [CompraFormComponent],
  imports: [SxiCommonModule],
  exports: [CompraFormComponent]
})
export class SxiComprasModule {}
