import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Params
} from '@angular/router';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import * as fromApplication from './application.reducer';

import { environment } from '../../../environments/environment';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
  parentParams?: Params;
}

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  application: fromApplication.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  application: fromApplication.reducer
};

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('router');

export const getApplicationState = createFeatureSelector<fromApplication.State>(
  'application'
);

export const getAppConfig = createSelector(
  getApplicationState,
  fromApplication.getAppConfig
);
export const getMainNavigation = createSelector(
  getApplicationState,
  fromApplication.getMainNavigation
);

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? []
  : [];

export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;
    let parentParams;
    if (state.parent) {
      // console.log('Adding parrent params: ', state);
      parentParams = state.parent.params;
    }

    return { url, queryParams, params, parentParams };
  }
}
