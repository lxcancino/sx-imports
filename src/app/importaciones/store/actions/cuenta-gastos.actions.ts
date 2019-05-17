import { Action } from '@ngrx/store';

import { CuentaDeGastos } from '@app/domain/models/embarques';

export enum CuentaDeGastosActionTypes {
  LoadCuentasDeGastos = '[CuentasDeGastos Guard] Load cuentas de gastos',
  LoadCuentasDeGastosFail = '[CuentasDeGastos Component] Load cuentas de gastos fail',
  LoadCuentasDeGastosSuccess = '[CuentasDeGastos Component] Load cuentas de gastos success'
}

export class LoadCuentasDeGastos implements Action {
  readonly type = CuentaDeGastosActionTypes.LoadCuentasDeGastos;
}
export class LoadCuentasDeGastosFail implements Action {
  readonly type = CuentaDeGastosActionTypes.LoadCuentasDeGastosFail;
  constructor(public payload: { response: any }) {}
}
export class LoadCuentasDeGastosSuccess implements Action {
  readonly type = CuentaDeGastosActionTypes.LoadCuentasDeGastosSuccess;
  constructor(public payload: { cuentas: CuentaDeGastos[] }) {}
}

export type CuentaDeGastosActions =
  | LoadCuentasDeGastos
  | LoadCuentasDeGastosFail
  | LoadCuentasDeGastosSuccess;
