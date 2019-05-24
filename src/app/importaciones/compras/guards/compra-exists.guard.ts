import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromCompra from '../../store/actions/compra.actions';

import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { CompraService } from '@app/importaciones/services/compra.service';

@Injectable({ providedIn: 'root' })
export class CompraExistsGuard implements CanActivate {
  constructor(
    private store: Store<fromStore.State>,
    private service: CompraService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = route.params.compraId;
    return this.hasEntityInApi(id);
  }

  /**
   * This method loads a requisicion with the given ID from the API and caches
   * it in the store, returning `true` or `false` if it was found.
   */
  hasEntityInApi(id: string): Observable<boolean> {
    return this.service.get(id).pipe(
      map(compra => new fromCompra.UpsertCompra({ compra })),
      // tap( compra => console.log('Compra detectada: ', compra)),
      tap(action => this.store.dispatch(action)),
      map(compra => !!compra),
      catchError(() => {
        return of(false);
      })
    );
  }
}
