import { Action } from '@ngrx/store';
import { Producto } from '@app/domain/models';

export enum ProductoActionTypes {
  LoadProductos = '[Productos Component] Load productos',
  LoadProductosFail = '[Productos Component] Load productos fail',
  LoadProductosSuccess = '[Productos Component] Load productos success'
}

export class LoadProductos implements Action {
  readonly type = ProductoActionTypes.LoadProductos;
}
export class LoadProductosFail implements Action {
  readonly type = ProductoActionTypes.LoadProductosFail;
  constructor(public payload: { response: any }) {}
}
export class LoadProductosSuccess implements Action {
  readonly type = ProductoActionTypes.LoadProductosSuccess;
  constructor(public payload: { productos: Producto[] }) {}
}

export type ProductoActions =
  | LoadProductos
  | LoadProductosFail
  | LoadProductosSuccess;
