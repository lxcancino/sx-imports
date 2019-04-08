import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogosRoutingModule } from './catalogos-routing.module';

import { CatalogosPageModule } from './catalogos-page/catalogos-page.module';
import { ProductosPageComponent } from './pages/productos-page/productos-page.component';

@NgModule({
  declarations: [ProductosPageComponent],
  imports: [CommonModule, CatalogosRoutingModule, CatalogosPageModule],
  exports: [CatalogosPageModule]
})
export class CatalogosModule {}
