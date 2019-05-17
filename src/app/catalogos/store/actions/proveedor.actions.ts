import { Action } from '@ngrx/store';
import { Proveedor } from '@app/domain/models';

export enum ProveedorActionTypes {
  LoadProveedores = '[Proveedores Guard] Load clases',
  LoadProveedoresFail = '[Proveedores Component] Load clases fail',
  LoadProveedoresSuccess = '[Proveedores Component] Load clases success'
}

export class LoadProveedores implements Action {
  readonly type = ProveedorActionTypes.LoadProveedores;
}
export class LoadProveedoresFail implements Action {
  readonly type = ProveedorActionTypes.LoadProveedoresFail;
  constructor(public payload: { response: any }) {}
}
export class LoadProveedoresSuccess implements Action {
  readonly type = ProveedorActionTypes.LoadProveedoresSuccess;
  constructor(public payload: { proveedores: Proveedor[] }) {}
}

export type ProveedorActions =
  | LoadProveedores
  | LoadProveedoresFail
  | LoadProveedoresSuccess;
