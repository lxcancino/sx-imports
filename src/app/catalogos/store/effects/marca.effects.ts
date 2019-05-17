import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions/marca.actions';
import { MarcaActionTypes } from '../actions/marca.actions';

import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { MarcaService } from '@app/catalogos/services/marca.service';

@Injectable()
export class MarcaEffects {
  @Effect() loadMarcas = this.actions$.pipe(
    ofType<fromActions.LoadMarcas>(MarcaActionTypes.LoadMarcas),
    switchMap(() =>
      this.service.list().pipe(
        map(marcas => new fromActions.LoadMarcasSuccess({ marcas })),
        catchError(response => of(new fromActions.LoadMarcasFail({ response })))
      )
    )
  );

  constructor(private actions$: Actions, private service: MarcaService) {}
}
