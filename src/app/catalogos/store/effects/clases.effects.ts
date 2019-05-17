import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions/clase.actions';
import { ClaseActionTypes } from '../actions/clase.actions';

import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { ClaseService } from '@app/catalogos/services/clase.service';

@Injectable()
export class ClaseEffects {
  @Effect() loadClases = this.actions$.pipe(
    ofType<fromActions.LoadClases>(ClaseActionTypes.LoadClases),
    switchMap(() =>
      this.service.list().pipe(
        map(clases => new fromActions.LoadClasesSuccess({ clases })),
        catchError(response => of(new fromActions.LoadClasesFail({ response })))
      )
    )
  );

  constructor(private actions$: Actions, private service: ClaseService) {}
}
