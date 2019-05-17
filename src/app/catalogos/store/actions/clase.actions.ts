import { Action } from '@ngrx/store';
import { Clase } from '@app/domain/models';

export enum ClaseActionTypes {
  LoadClases = '[Clases Guard] Load clases',
  LoadClasesFail = '[Clases Component] Load clases fail',
  LoadClasesSuccess = '[Clases Component] Load clases success'
}

export class LoadClases implements Action {
  readonly type = ClaseActionTypes.LoadClases;
}
export class LoadClasesFail implements Action {
  readonly type = ClaseActionTypes.LoadClasesFail;
  constructor(public payload: { response: any }) {}
}
export class LoadClasesSuccess implements Action {
  readonly type = ClaseActionTypes.LoadClasesSuccess;
  constructor(public payload: { clases: Clase[] }) {}
}

export type ClaseActions = LoadClases | LoadClasesFail | LoadClasesSuccess;
