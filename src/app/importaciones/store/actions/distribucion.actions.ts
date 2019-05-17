import { Action } from '@ngrx/store';

import { Distribucion } from '@app/domain/models/embarques';

export enum DistribucionActionTypes {
  LoadDistribuciones = '[Distribuciones Guard] Load distribuciones',
  LoadDistribucionesFail = '[Distribuciones Component] Load distribuciones fail',
  LoadDistribucionesSuccess = '[Distribuciones Component] Load distribuciones success'
}

export class LoadDistribuciones implements Action {
  readonly type = DistribucionActionTypes.LoadDistribuciones;
}
export class LoadDistribucionesFail implements Action {
  readonly type = DistribucionActionTypes.LoadDistribucionesFail;
  constructor(public payload: { response: any }) {}
}
export class LoadDistribucionesSuccess implements Action {
  readonly type = DistribucionActionTypes.LoadDistribucionesSuccess;
  constructor(public payload: { distribuciones: Distribucion[] }) {}
}

export type DistribucionActions =
  | LoadDistribuciones
  | LoadDistribucionesFail
  | LoadDistribucionesSuccess;
