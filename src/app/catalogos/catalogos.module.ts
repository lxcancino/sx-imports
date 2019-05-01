import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogosRoutingModule } from './catalogos-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

import { CatalogosPageModule } from './catalogos-page/catalogos-page.module';
import { ProductosPageComponent } from './pages/productos-page/productos-page.component';

@NgModule({
  declarations: [ProductosPageComponent],
  imports: [
    CommonModule,
    CatalogosRoutingModule,
    CatalogosPageModule,
    StoreModule.forFeature('catalogos', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [CatalogosPageModule]
})
export class CatalogosModule {}
