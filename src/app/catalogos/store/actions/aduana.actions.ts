import { Action } from '@ngrx/store';
import { Aduana } from '@app/domain/models';

export enum AduanaActionTypes {
  LoadAduanas = '[Aduanas Guard] Load aduanas',
  LoadAduanasFail = '[Aduanas Component] Load aduanas fail',
  LoadAduanasSuccess = '[Aduanas Component] Load aduanas success'
}

export class LoadAduanas implements Action {
  readonly type = AduanaActionTypes.LoadAduanas;
}
export class LoadAduanasFail implements Action {
  readonly type = AduanaActionTypes.LoadAduanasFail;
  constructor(public payload: { response: any }) {}
}
export class LoadAduanasSuccess implements Action {
  readonly type = AduanaActionTypes.LoadAduanasSuccess;
  constructor(public payload: { aduanas: Aduana[] }) {}
}

export type AduanaActions = LoadAduanas | LoadAduanasFail | LoadAduanasSuccess;
