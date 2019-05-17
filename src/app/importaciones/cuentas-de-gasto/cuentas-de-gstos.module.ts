import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { CuentasDeGastoRoutingModule } from './cuentas-de-gasto-routing.module';

import { pages } from './pages';
import { components, entryComponents } from './components';

@NgModule({
  declarations: [...components, ...entryComponents, ...pages],
  imports: [SharedModule, CuentasDeGastoRoutingModule]
})
export class CuentasDeGastoModule {}
