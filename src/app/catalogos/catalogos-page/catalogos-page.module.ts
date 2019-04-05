import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
import { CatalogosPageComponent } from './catalogos-page.component';

@NgModule({
  declarations: [CatalogosPageComponent],
  imports: [SharedModule, RouterModule],
  exports: [CatalogosPageComponent]
})
export class CatalogosPageModule {}
