import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromRoot from '@app/store';
import * as fromActions from '../actions/pedimento.actions';
import { PedimentoActionTypes } from '../actions/pedimento.actions';

import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import { PedimentoService } from '@app/importaciones/services/pedimento.service';

@Injectable()
export class PedimentoEffects {
  @Effect() loadPedimentos = this.actions$.pipe(
    ofType<fromActions.LoadPedimentos>(PedimentoActionTypes.LoadPedimentos),
    switchMap(() =>
      this.service.list().pipe(
        map(
          pedimentos => new fromActions.LoadPedimentosSuccess({ pedimentos })
        ),
        catchError(response =>
          of(new fromActions.LoadPedimentosFail({ response }))
        )
      )
    )
  );

  @Effect() tenant$ = this.actions$.pipe(
    ofType<fromRoot.SetCurrentTenant>(
      fromRoot.ApplicationActionTypes.SetCurrentTenant
    ),
    map(action => action.payload.tenant),
    map(tenant => new fromActions.LoadPedimentos())
  );

  constructor(private actions$: Actions, private service: PedimentoService) {}
}
