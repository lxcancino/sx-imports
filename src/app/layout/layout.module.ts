import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavListPageComponent } from './components/nav-list-page/nav-list-page.component';
import { SharedModule } from '@app/shared/shared.module';
import { MainToolbarComponent } from './components/main-toolbar/main-toolbar.component';

@NgModule({
  declarations: [NavListPageComponent, MainToolbarComponent],
  imports: [SharedModule, RouterModule],
  exports: [NavListPageComponent, MainToolbarComponent]
})
export class LayoutModule {}
