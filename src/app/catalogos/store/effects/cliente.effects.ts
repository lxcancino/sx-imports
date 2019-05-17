import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions/cliente.actions';
import { ClienteActionTypes } from '../actions/cliente.actions';

import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { ClienteService } from '@app/catalogos/services/cliente.service';

@Injectable()
export class ClienteEffects {
  @Effect() loadClientes = this.actions$.pipe(
    ofType<fromActions.LoadClientes>(ClienteActionTypes.LoadClientes),
    switchMap(() =>
      this.service.list().pipe(
        map(clientes => new fromActions.LoadClientesSuccess({ clientes })),
        catchError(response =>
          of(new fromActions.LoadClientesFail({ response }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: ClienteService) {}
}
