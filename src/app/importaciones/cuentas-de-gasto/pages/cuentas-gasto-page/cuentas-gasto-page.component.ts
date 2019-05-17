import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store';

import { Observable } from 'rxjs';

import { CuentaDeGastos } from '@app/domain/models/embarques';

@Component({
  selector: 'sxi-cuentas-gasto-page',
  templateUrl: './cuentas-gasto-page.component.html',
  styleUrls: ['./cuentas-gasto-page.component.scss']
})
export class CuentasGastoPageComponent implements OnInit {
  cuentas$: Observable<CuentaDeGastos[]>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.cuentas$ = this.store.pipe(select(fromStore.getCuentasDeGastos));
  }
}
