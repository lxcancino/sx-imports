import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions/linea.actions';
import { LineaActionTypes } from '../actions/linea.actions';

import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { LineaService } from '@app/catalogos/services/linea.service';

@Injectable()
export class LineaEffects {
  @Effect() loadLineas = this.actions$.pipe(
    ofType<fromActions.LoadLineas>(LineaActionTypes.LoadLineas),
    switchMap(() =>
      this.service.list().pipe(
        map(lineas => new fromActions.LoadLineasSuccess({ lineas })),
        catchError(response => of(new fromActions.LoadLineasFail({ response })))
      )
    )
  );

  constructor(private actions$: Actions, private service: LineaService) {}
}
