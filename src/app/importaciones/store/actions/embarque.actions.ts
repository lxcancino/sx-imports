import { Action } from '@ngrx/store';

import { Embarque } from '@app/domain/models/embarques';

export enum EmbarqueActionTypes {
  LoadEmbarques = '[Embarques Guard] Load embarques',
  LoadEmbarquesFail = '[Embarques Component] Load embarques fail',
  LoadEmbarquesSuccess = '[Embarques Component] Load embarques success'
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

export type EmbarqueActions =
  | LoadEmbarques
  | LoadEmbarquesFail
  | LoadEmbarquesSuccess;
