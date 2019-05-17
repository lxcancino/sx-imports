import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { EmbarquesRoutingModule } from './embarques-routing.module';

import { pages } from './pages';
import { components, entryComponents } from './components';

@NgModule({
  declarations: [...components, ...entryComponents, ...pages],
  imports: [SharedModule, EmbarquesRoutingModule]
})
export class EmbarquesModule {}
