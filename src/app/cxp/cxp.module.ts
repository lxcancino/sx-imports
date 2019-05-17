import { NgModule } from '@angular/core';

import { CxpRoutingModule } from './cxp-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@app/layout/layout.module';

import { CxpPageComponent } from './pages/cxp-page/cxp-page.component';

@NgModule({
  declarations: [CxpPageComponent],
  imports: [SharedModule, LayoutModule, CxpRoutingModule]
})
export class CxpModule {}
