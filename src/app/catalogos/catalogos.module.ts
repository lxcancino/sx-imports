import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogosRoutingModule } from './catalogos-routing.module';

import { CatalogosPageModule } from './catalogos-page/catalogos-page.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CatalogosRoutingModule, CatalogosPageModule],
  exports: [CatalogosPageModule]
})
export class CatalogosModule {}
