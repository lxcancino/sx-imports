import { Action } from '@ngrx/store';

import { Pedimento } from '@app/domain/models/embarques';

export enum PedimentoActionTypes {
  LoadPedimentos = '[Pedimentos Guard] Load embarques',
  LoadPedimentosFail = '[Pedimentos Component] Load embarques fail',
  LoadPedimentosSuccess = '[Pedimentos Component] Load embarques success'
}

export class LoadPedimentos implements Action {
  readonly type = PedimentoActionTypes.LoadPedimentos;
}
export class LoadPedimentosFail implements Action {
  readonly type = PedimentoActionTypes.LoadPedimentosFail;
  constructor(public payload: { response: any }) {}
}
export class LoadPedimentosSuccess implements Action {
  readonly type = PedimentoActionTypes.LoadPedimentosSuccess;
  constructor(public payload: { pedimentos: Pedimento[] }) {}
}

export type PedimentoActions =
  | LoadPedimentos
  | LoadPedimentosFail
  | LoadPedimentosSuccess;
