import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromRoot from '@app/store';
import * as fromActions from '../actions/cuenta-gastos.actions';
import { CuentaDeGastosActionTypes } from '../actions/cuenta-gastos.actions';

import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import { CuentaDeGastosService } from '@app/importaciones/services/cuentas-gastos.service';

@Injectable()
export class CuentaDeGastosEffects {
  @Effect() loadCuentasDeGasto = this.actions$.pipe(
    ofType<fromActions.LoadCuentasDeGastos>(
      CuentaDeGastosActionTypes.LoadCuentasDeGastos
    ),
    switchMap(() =>
      this.service.list().pipe(
        map(cuentas => new fromActions.LoadCuentasDeGastosSuccess({ cuentas })),
        catchError(response =>
          of(new fromActions.LoadCuentasDeGastosFail({ response }))
        )
      )
    )
  );

  @Effect() tenant$ = this.actions$.pipe(
    ofType<fromRoot.SetCurrentTenant>(
      fromRoot.ApplicationActionTypes.SetCurrentTenant
    ),
    map(action => action.payload.tenant),
    map(tenant => new fromActions.LoadCuentasDeGastos())
  );

  constructor(
    private actions$: Actions,
    private service: CuentaDeGastosService
  ) {}
}
