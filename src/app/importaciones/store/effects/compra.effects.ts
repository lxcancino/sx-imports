import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromRoot from '@app/store';
import * as fromActions from '../actions/compra.actions';
import { CompraActionTypes } from '../actions/compra.actions';

import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import { CompraService } from '@app/importaciones/services/compra.service';

@Injectable()
export class CompraEffects {
  @Effect() loadCompras = this.actions$.pipe(
    ofType<fromActions.LoadCompras>(CompraActionTypes.LoadCompras),
    switchMap(() =>
      this.service.list().pipe(
        map(compras => new fromActions.LoadComprasSuccess({ compras })),
        catchError(response =>
          of(new fromActions.LoadComprasFail({ response }))
        )
      )
    )
  );

  @Effect() saveCompra = this.actions$.pipe(
    ofType<fromActions.SaveCompra>(CompraActionTypes.SaveCompra),
    map(action => action.payload.compra),
    switchMap(data =>
      this.service.save(data).pipe(
        map(compra => new fromActions.SaveCompraSuccess({ compra })),
        catchError(response => of(new fromActions.SaveCompraFail({ response })))
      )
    )
  );

  @Effect()
  update$ = this.actions$.pipe(
    ofType<fromActions.UpdateCompra>(CompraActionTypes.UpdateCompra),
    map(action => action.payload.update),
    switchMap(update => {
      return this.service.update(update).pipe(
        map(compra => new fromActions.UpdateCompraSuccess({ compra })),
        catchError(error =>
          of(new fromActions.UpdateCompraFail({ response: error }))
        )
      );
    })
  );

  @Effect() tenant$ = this.actions$.pipe(
    ofType<fromRoot.SetCurrentTenant>(
      fromRoot.ApplicationActionTypes.SetCurrentTenant
    ),
    map(action => action.payload.tenant),
    map(tenant => new fromActions.LoadCompras())
  );

  @Effect()
  fail$ = this.actions$.pipe(
    ofType<
      | fromActions.LoadComprasFail
      | fromActions.SaveCompraFail
      | fromActions.UpdateCompraFail
    >(
      CompraActionTypes.LoadComprasFail,
      CompraActionTypes.SaveCompraFail,
      CompraActionTypes.UpdateCompraFail
    ),
    map(action => action.payload.response),
    map(response => new fromRoot.GlobalHttpError({ response }))
  );

  constructor(private actions$: Actions, private service: CompraService) {}
}
