import { Action } from '@ngrx/store';
import { Marca } from '@app/domain/models';

export enum MarcaActionTypes {
  LoadMarcas = '[Marcas Component] Load marcas',
  LoadMarcasFail = '[Marcas Component] Load marcas fail',
  LoadMarcasSuccess = '[Marcas Component] Load marcas success'
}

export class LoadMarcas implements Action {
  readonly type = MarcaActionTypes.LoadMarcas;
}
export class LoadMarcasFail implements Action {
  readonly type = MarcaActionTypes.LoadMarcasFail;
  constructor(public payload: { response: any }) {}
}
export class LoadMarcasSuccess implements Action {
  readonly type = MarcaActionTypes.LoadMarcasSuccess;
  constructor(public payload: { marcas: Marca[] }) {}
}

export type MarcaActions = LoadMarcas | LoadMarcasFail | LoadMarcasSuccess;
