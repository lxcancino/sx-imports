import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions/proveedor-producto.action';
import { ProveedorProductoActionTypes } from '../actions/proveedor-producto.action';

import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { ProveedorService } from '@app/catalogos/services/proveedor.service';

@Injectable()
export class ProveedorProductoEffects {
  @Effect() loadProveedores = this.actions$.pipe(
    ofType<fromActions.LoadProveedorProducto>(
      ProveedorProductoActionTypes.LoadProveedorProducto
    ),
    map(action => action.payload.proveedorId),
    switchMap(proveedorId =>
      this.service.productos(proveedorId).pipe(
        map(
          productos =>
            new fromActions.LoadProveedorProductoSuccess({ productos })
        ),
        catchError(response =>
          of(new fromActions.LoadProveedorProductoFail({ response }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: ProveedorService) {}
}
