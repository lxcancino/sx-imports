import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { AppConfig, NavigationRoute } from '@app/core/models';

export enum ApplicationActionTypes {
  SetAppConfig = '[Application AppComponent] Set application config',
  SetMainNavigation = '[Application AppComponent] Set main navigation',
  SetGlobalLoading = '[Application] Set global loading',
  GlobalHttpError = '[Application] Set global Http error',
  SetCurrentTenant = '[Application NavBar] Set application current tenant'
}

export class SetAppConfig implements Action {
  readonly type = ApplicationActionTypes.SetAppConfig;
  constructor(public payload: { config: AppConfig }) {}
}
export class SetMainNavigation implements Action {
  readonly type = ApplicationActionTypes.SetMainNavigation;
  constructor(public payload: { navigation: NavigationRoute[] }) {}
}

export class SetGlobalLoading implements Action {
  readonly type = ApplicationActionTypes.SetGlobalLoading;
  constructor(public payload: { loading: boolean }) {}
}

export class GlobalHttpError implements Action {
  readonly type = ApplicationActionTypes.GlobalHttpError;
  constructor(public payload: { response: HttpErrorResponse }) {}
}

export class SetCurrentTenant implements Action {
  readonly type = ApplicationActionTypes.SetCurrentTenant;
  constructor(public payload: { tenant: 'PAPER' | 'IMPAP' }) {}
}

export type ApplicationActions =
  | SetAppConfig
  | SetMainNavigation
  | SetGlobalLoading
  | GlobalHttpError
  | SetCurrentTenant;
