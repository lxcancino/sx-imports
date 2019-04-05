import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/store';
import * as fromStore from '../store';
import * as fromAuth from '../store/actions/auth.actions';

import { Observable, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromStore.AuthState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(fromStore.isLoggedIn),
      map(loggedIn => {
        if (!loggedIn) {
          this.store.dispatch(
            new fromRoot.Go({
              path: ['/login'],
              query: {},
              extras: { queryParams: { returnUrl: state.url } }
            })
          );
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
