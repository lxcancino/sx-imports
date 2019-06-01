import { Action } from '@ngrx/store';

import { Embarque } from '@app/domain/models/embarques';

export enum EmbarqueActionTypes {
  LoadEmbarques = '[Embarques Guard] Load embarques',
  LoadEmbarquesFail = '[Embarques Component] Load embarques fail',
  LoadEmbarquesSuccess = '[Embarques Component] Load embarques success',
  // Create
  CreateEmbarque = '[EmbarquesPage component] Create embarque',
  CreateEmbarqueFail = '[Embarque Effect] Create embarque fail',
  CreateEmbarqueSuccess = '[Embarque effect] Create Embarque success',

  // Upsert
  UpsertEmbarque = '[Embarque exists guard] Upsert embarque'
}

export class LoadEmbarques implements Action {
  readonly type = EmbarqueActionTypes.LoadEmbarques;
}
export class LoadEmbarquesFail implements Action {
  readonly type = EmbarqueActionTypes.LoadEmbarquesFail;
  constructor(public payload: { response: any }) {}
}
export class LoadEmbarquesSuccess implements Action {
  readonly type = EmbarqueActionTypes.LoadEmbarquesSuccess;
  constructor(public payload: { embarques: Embarque[] }) {}
}

export class CreateEmbarque implements Action {
  readonly type = EmbarqueActionTypes.CreateEmbarque;
  constructor(public payload: { embarque: Embarque }) {}
}
export class CreateEmbarqueFail implements Action {
  readonly type = EmbarqueActionTypes.CreateEmbarqueFail;
  constructor(public payload: { response: any }) {}
}
export class CreateEmbarqueSuccess implements Action {
  readonly type = EmbarqueActionTypes.CreateEmbarqueSuccess;
  constructor(public payload: { embarque: Embarque }) {}
}

export class UpsertEmbarque implements Action {
  readonly type = EmbarqueActionTypes.UpsertEmbarque;
  constructor(public payload: { embarque: Embarque }) {}
}

export type EmbarqueActions =
  | LoadEmbarques
  | LoadEmbarquesFail
  | LoadEmbarquesSuccess
  | CreateEmbarque
  | CreateEmbarqueFail
  | CreateEmbarqueSuccess
  | UpsertEmbarque;
