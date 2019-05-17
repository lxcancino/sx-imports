import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { CxcRoutingModule } from './cxc-routing.module';
import { LayoutModule } from '@app/layout/layout.module';

import { CxcPageComponent } from './pages/cxc-page/cxc-page.component';

@NgModule({
  declarations: [CxcPageComponent],
  imports: [SharedModule, LayoutModule, CxcRoutingModule]
})
export class CxcModule {}
