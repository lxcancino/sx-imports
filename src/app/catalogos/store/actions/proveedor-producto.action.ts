import { Action } from '@ngrx/store';
import { ProveedorProducto } from '@app/domain/models';

export enum ProveedorProductoActionTypes {
  LoadProveedorProducto = '[CompraComponent] Load  proveedor productos',
  LoadProveedorProductoFail = '[ProveedorProducto Effect API] Load proveedor productos fail',
  LoadProveedorProductoSuccess = '[Proveedores Component] Load  proveedor productos success'
}

export class LoadProveedorProducto implements Action {
  readonly type = ProveedorProductoActionTypes.LoadProveedorProducto;
  constructor(public payload: { proveedorId: number }) {}
}
export class LoadProveedorProductoFail implements Action {
  readonly type = ProveedorProductoActionTypes.LoadProveedorProductoFail;
  constructor(public payload: { response: any }) {}
}
export class LoadProveedorProductoSuccess implements Action {
  readonly type = ProveedorProductoActionTypes.LoadProveedorProductoSuccess;
  constructor(public payload: { productos: ProveedorProducto[] }) {}
}

export type ProveedorProductoActions =
  | LoadProveedorProducto
  | LoadProveedorProductoFail
  | LoadProveedorProductoSuccess;
