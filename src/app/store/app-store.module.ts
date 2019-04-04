import { NgModule } from '@angular/core';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, effects, metaReducers, CustomSerializer } from './';

import { environment } from '../../environments/environment.prod';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: 'SX IMPORTS DevTools',
      logOnly: environment.production
    }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer })
  ]
})
export class AppStoreModule {}
