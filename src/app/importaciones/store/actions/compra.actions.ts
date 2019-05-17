import { Action } from '@ngrx/store';

import { Compra } from '@app/domain/models/compras';

export enum CompraActionTypes {
  LoadCompras = '[Compras Guard] Load compras',
  LoadComprasFail = '[Compras Component] Load compras fail',
  LoadComprasSuccess = '[Compras Component] Load compras success'
}

export class LoadCompras implements Action {
  readonly type = CompraActionTypes.LoadCompras;
}
export class LoadComprasFail implements Action {
  readonly type = CompraActionTypes.LoadComprasFail;
  constructor(public payload: { response: any }) {}
}
export class LoadComprasSuccess implements Action {
  readonly type = CompraActionTypes.LoadComprasSuccess;
  constructor(public payload: { compras: Compra[] }) {}
}

export type CompraActions = LoadCompras | LoadComprasFail | LoadComprasSuccess;
