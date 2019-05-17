import { Action } from '@ngrx/store';
import { Cliente } from '@app/domain/models';

export enum ClienteActionTypes {
  LoadClientes = '[Clientes Guard] Load clases',
  LoadClientesFail = '[Clientes Component] Load clases fail',
  LoadClientesSuccess = '[Clientes Component] Load clases success'
}

export class LoadClientes implements Action {
  readonly type = ClienteActionTypes.LoadClientes;
}
export class LoadClientesFail implements Action {
  readonly type = ClienteActionTypes.LoadClientesFail;
  constructor(public payload: { response: any }) {}
}
export class LoadClientesSuccess implements Action {
  readonly type = ClienteActionTypes.LoadClientesSuccess;
  constructor(public payload: { clientes: Cliente[] }) {}
}

export type ClienteActions =
  | LoadClientes
  | LoadClientesFail
  | LoadClientesSuccess;
