import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavListPageComponent } from './components/nav-list-page/nav-list-page.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [NavListPageComponent],
  imports: [SharedModule, RouterModule],
  exports: [NavListPageComponent]
})
export class LayoutModule {}
