import { Action } from '@ngrx/store';
import { Linea } from '@app/domain/models';

export enum LineaActionTypes {
  LoadLineas = '[Lineas Component] Load lineas',
  LoadLineasFail = '[Lineas Component] Load lineas fail',
  LoadLineasSuccess = '[Lineas Component] Load lineas success'
}

export class LoadLineas implements Action {
  readonly type = LineaActionTypes.LoadLineas;
}
export class LoadLineasFail implements Action {
  readonly type = LineaActionTypes.LoadLineasFail;
  constructor(public payload: { response: any }) {}
}
export class LoadLineasSuccess implements Action {
  readonly type = LineaActionTypes.LoadLineasSuccess;
  constructor(public payload: { lineas: Linea[] }) {}
}

export type LineaActions = LoadLineas | LoadLineasFail | LoadLineasSuccess;
