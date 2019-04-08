import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
import { CatalogosPageComponent } from './catalogos-page.component';
import { LayoutModule } from '@app/layout/layout.module';

@NgModule({
  declarations: [CatalogosPageComponent],
  imports: [SharedModule, LayoutModule, RouterModule],
  exports: [CatalogosPageComponent]
})
export class CatalogosPageModule {}
