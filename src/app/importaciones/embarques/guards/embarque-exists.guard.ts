import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromEmbarque from '../../store/actions/embarque.actions';

import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { EmbarqueService } from '@app/importaciones/services/embarque.service';

@Injectable({ providedIn: 'root' })
export class EmbarqueExistsGuard implements CanActivate {
  constructor(
    private store: Store<fromStore.State>,
    private service: EmbarqueService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = route.params.embarqueId;
    return this.hasEntityInApi(id);
  }

  /**
   * This method loads a requisicion with the given ID from the API and caches
   * it in the store, returning `true` or `false` if it was found.
   */
  hasEntityInApi(id: number): Observable<boolean> {
    return this.service.get(id).pipe(
      map(embarque => new fromEmbarque.UpsertEmbarque({ embarque })),
      // tap( embarque => console.log('Compra detectada: ', embarque)),
      tap(action => this.store.dispatch(action)),
      map(embarque => !!embarque),
      catchError(() => {
        return of(false);
      })
    );
  }
}
