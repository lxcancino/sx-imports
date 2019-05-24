import { Action } from '@ngrx/store';

import { Compra } from '@app/domain/models/compras';
import { Update } from '@ngrx/entity';

export enum CompraActionTypes {
  LoadCompras = '[Compras Guard] Load compras',
  LoadComprasFail = '[Compras Component] Load compras fail',
  LoadComprasSuccess = '[Compras Component] Load compras success',
  SaveCompra = '[Compra component] Save compra',
  SaveCompraFail = '[Compras  API] Save compra fail',
  SaveCompraSuccess = '[Compras API] Save compra success',
  // Update
  UpdateCompra = '[Compra component] Update compra',
  UpdateCompraFail = '[Compras  API] Update compra fail',
  UpdateCompraSuccess = '[Compras API] Update compra success',
  // Upsert
  UpsertCompra = '[Compra exists gurad] Upsert compra'
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
// Save actions
export class SaveCompra implements Action {
  readonly type = CompraActionTypes.SaveCompra;
  constructor(public payload: { compra: Partial<Compra> }) {}
}
export class SaveCompraFail implements Action {
  readonly type = CompraActionTypes.SaveCompraFail;
  constructor(public payload: { response: any }) {}
}
export class SaveCompraSuccess implements Action {
  readonly type = CompraActionTypes.SaveCompraSuccess;
  constructor(public payload: { compra: Compra }) {}
}
// Update actions
export class UpdateCompra implements Action {
  readonly type = CompraActionTypes.UpdateCompra;
  constructor(public payload: { update: Update<Compra> }) {}
}
export class UpdateCompraFail implements Action {
  readonly type = CompraActionTypes.UpdateCompraFail;
  constructor(public payload: { response: any }) {}
}
export class UpdateCompraSuccess implements Action {
  readonly type = CompraActionTypes.UpdateCompraSuccess;
  constructor(public payload: { compra: Compra }) {}
}

export class UpsertCompra implements Action {
  readonly type = CompraActionTypes.UpsertCompra;
  constructor(public payload: { compra: Compra }) {}
}

export type CompraActions =
  | LoadCompras
  | LoadComprasFail
  | LoadComprasSuccess
  | SaveCompra
  | SaveCompraFail
  | SaveCompraSuccess
  | UpdateCompra
  | UpdateCompraFail
  | UpdateCompraSuccess
  | UpsertCompra;
