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

  @Effect() tenant$ = this.actions$.pipe(
    ofType<fromRoot.SetCurrentTenant>(
      fromRoot.ApplicationActionTypes.SetCurrentTenant
    ),
    map(action => action.payload.tenant),
    map(tenant => new fromActions.LoadCompras())
  );

  constructor(private actions$: Actions, private service: CompraService) {}
}
