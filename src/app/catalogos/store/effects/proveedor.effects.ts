import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions/proveedor.actions';
import { ProveedorActionTypes } from '../actions/proveedor.actions';

import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { ProveedorService } from '@app/catalogos/services/proveedor.service';

@Injectable()
export class ProveedorEffects {
  @Effect() loadProveedores = this.actions$.pipe(
    ofType<fromActions.LoadProveedores>(ProveedorActionTypes.LoadProveedores),
    switchMap(() =>
      this.service.list().pipe(
        map(
          proveedores => new fromActions.LoadProveedoresSuccess({ proveedores })
        ),
        catchError(response =>
          of(new fromActions.LoadProveedoresFail({ response }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: ProveedorService) {}
}
