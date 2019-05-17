import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromRoot from '@app/store';
import * as fromActions from '../actions/distribucion.actions';
import { DistribucionActionTypes } from '../actions/distribucion.actions';

import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import { DistribucionService } from '@app/importaciones/services/distribucion.service';

@Injectable()
export class DistribucionEffects {
  @Effect() loadDistribuciones = this.actions$.pipe(
    ofType<fromActions.LoadDistribuciones>(
      DistribucionActionTypes.LoadDistribuciones
    ),
    switchMap(() =>
      this.service.list().pipe(
        map(
          distribuciones =>
            new fromActions.LoadDistribucionesSuccess({ distribuciones })
        ),
        catchError(response =>
          of(new fromActions.LoadDistribucionesFail({ response }))
        )
      )
    )
  );

  @Effect() tenant$ = this.actions$.pipe(
    ofType<fromRoot.SetCurrentTenant>(
      fromRoot.ApplicationActionTypes.SetCurrentTenant
    ),
    map(action => action.payload.tenant),
    map(tenant => new fromActions.LoadDistribuciones())
  );

  constructor(
    private actions$: Actions,
    private service: DistribucionService
  ) {}
}
