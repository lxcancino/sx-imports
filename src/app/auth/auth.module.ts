import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf
} from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './store/reducers';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { AuthEffects } from './store/effects/auth.effects';

import { TokenInterceptor } from './services/token.interceptor';
import { UnautorizedInterceptor } from './services/unauthorized.interceptor';

import { components } from './components';

import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [...components],
  exports: [...components],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnautorizedInterceptor,
      multi: true
    }
  ]
})
export class AuthModule {
  constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
    if (parentModule) {
      throw new Error(
        'AuthModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
