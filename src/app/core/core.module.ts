import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CovalentModule } from '../shared/covalent.module';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { throwIfAlreadyLoaded } from './module-import-check';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  declarations: [MainPageComponent, ToolbarComponent, SideNavComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    CovalentModule,
    HttpClientModule,
    RouterModule,
    HomePageModule
  ],
  exports: [MainPageComponent]
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
