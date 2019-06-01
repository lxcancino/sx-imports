import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import * as fromRoot from '@app/store';
import * as fromActions from '../actions/embarque.actions';
import { EmbarqueActionTypes } from '../actions/embarque.actions';

import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import { EmbarqueService } from '@app/importaciones/services/embarque.service';

@Injectable()
export class EmbarqueEffects {
  @Effect() loadEmbarques = this.actions$.pipe(
    ofType<fromActions.LoadEmbarques>(EmbarqueActionTypes.LoadEmbarques),
    switchMap(() =>
      this.service.list().pipe(
        map(embarques => new fromActions.LoadEmbarquesSuccess({ embarques })),
        catchError(response =>
          of(new fromActions.LoadEmbarquesFail({ response }))
        )
      )
    )
  );

  @Effect() createEmbarque$ = this.actions$.pipe(
    ofType<fromActions.CreateEmbarque>(EmbarqueActionTypes.CreateEmbarque),
    map(action => action.payload.embarque),
    switchMap(emb =>
      this.service.save(emb).pipe(
        map(embarque => new fromActions.CreateEmbarqueSuccess({ embarque })),
        catchError(response =>
          of(new fromActions.CreateEmbarqueFail({ response }))
        )
      )
    )
  );

  @Effect({ dispatch: false }) createSuccess$ = this.actions$.pipe(
    ofType<fromActions.CreateEmbarqueSuccess>(
      EmbarqueActionTypes.CreateEmbarqueSuccess
    ),
    map(action => action.payload.embarque),
    tap(e => console.log('Embarque generado: ', e))
  );

  @Effect() tenant$ = this.actions$.pipe(
    ofType<fromRoot.SetCurrentTenant>(
      fromRoot.ApplicationActionTypes.SetCurrentTenant
    ),
    map(action => action.payload.tenant),
    map(tenant => new fromActions.LoadEmbarques())
  );

  constructor(private actions$: Actions, private service: EmbarqueService) {}
}
