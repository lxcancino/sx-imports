import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromLineas from './linea.reducer';
import * as fromClases from './clase.reducer';
import * as fromMarcas from './marca.reducer';
import * as fromProductos from './producto.reducer';
import * as fromClientes from './cliente.reducer';
import * as fromProveedores from './proveedor.reducer';
import * as fromAduanas from './aduana.reducer';

export interface State {
  lineas: fromLineas.State;
  clases: fromClases.State;
  marcas: fromMarcas.State;
  productos: fromProductos.State;
  clientes: fromClientes.State;
  proveedores: fromProveedores.State;
  aduanas: fromAduanas.State;
}

export const reducers: ActionReducerMap<State> = {
  lineas: fromLineas.reducer,
  clases: fromClases.reducer,
  marcas: fromMarcas.reducer,
  productos: fromProductos.reducer,
  clientes: fromClientes.reducer,
  proveedores: fromProveedores.reducer,
  aduanas: fromAduanas.reducer
};

export const getState = createFeatureSelector<State>('catalogos');
