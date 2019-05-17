import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { PedimentosRoutingModule } from './pedimentos-routing.module';

import { pages } from './pages';
import { components, entryComponents } from './components';

@NgModule({
  declarations: [...components, ...entryComponents, ...pages],
  imports: [SharedModule, PedimentosRoutingModule]
})
export class PedimentosModule {}
