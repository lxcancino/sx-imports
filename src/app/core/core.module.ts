import { NgModule, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CovalentModule } from '../shared/covalent.module';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { throwIfAlreadyLoaded } from './module-import-check';

import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HomePageModule } from './home-page/home-page.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ConfigService } from './services/config.service';
import { TenantInterceptor } from './services/tenant.interceptor';

export function onAppInit(configService: ConfigService): () => Promise<any> {
  return () => configService.load();
}

@NgModule({
  declarations: [MainPageComponent, SideNavComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    CovalentModule,
    HttpClientModule,
    RouterModule,
    HomePageModule
  ],
  exports: [MainPageComponent],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: onAppInit,
      multi: true,
      deps: [ConfigService]
    },
    { provide: HTTP_INTERCEPTORS, useClass: TenantInterceptor, multi: true }
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
