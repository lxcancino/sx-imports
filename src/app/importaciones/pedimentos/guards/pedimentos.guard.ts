import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';

import { Observable, of } from 'rxjs';
import { switchMap, catchError, tap, filter, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PedimentosGuard implements CanActivate {
  constructor(private store: Store<fromStore.State>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.pipe(
      select(fromStore.getPedimentosLoaded),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadPedimentos());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
