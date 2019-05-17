import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromActions from '../actions/producto.actions';
import { ProductoActionTypes } from '../actions/producto.actions';

import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { ProductoService } from '@app/catalogos/services/producto.service';

@Injectable()
export class ProductoEffects {
  @Effect() loadProductos = this.actions$.pipe(
    ofType<fromActions.LoadProductos>(ProductoActionTypes.LoadProductos),
    switchMap(() =>
      this.service.list().pipe(
        map(productos => new fromActions.LoadProductosSuccess({ productos })),
        catchError(response =>
          of(new fromActions.LoadProductosFail({ response }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: ProductoService) {}
}
