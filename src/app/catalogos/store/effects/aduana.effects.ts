import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions/aduana.actions';
import { AduanaActionTypes } from '../actions/aduana.actions';

import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { AduanaService } from '@app/catalogos/services/aduana.service';

@Injectable()
export class AduanaEffects {
  @Effect() loadAduanas = this.actions$.pipe(
    ofType<fromActions.LoadAduanas>(AduanaActionTypes.LoadAduanas),
    switchMap(() =>
      this.service.list().pipe(
        map(aduanas => new fromActions.LoadAduanasSuccess({ aduanas })),
        catchError(response =>
          of(new fromActions.LoadAduanasFail({ response }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: AduanaService) {}
}
