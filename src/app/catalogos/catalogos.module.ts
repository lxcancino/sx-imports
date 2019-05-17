import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { CatalogosRoutingModule } from './catalogos-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

import { pages } from './pages';
import { components, entryComponents } from './components';

import { CatalogosPageModule } from './catalogos-page/catalogos-page.module';

@NgModule({
  declarations: [...pages, ...components, ...entryComponents],
  imports: [
    SharedModule,
    CatalogosRoutingModule,
    CatalogosPageModule,
    StoreModule.forFeature('catalogos', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [CatalogosPageModule]
})
export class CatalogosModule {}
