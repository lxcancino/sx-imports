import { NgModule } from '@angular/core';

import { ImportacionesRoutingModule } from './importaciones-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@app/layout/layout.module';

import { pages } from './pages';

@NgModule({
  declarations: [...pages],
  imports: [
    SharedModule,
    LayoutModule,
    ImportacionesRoutingModule,
    StoreModule.forFeature('importaciones', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class ImportacionesModule {}
