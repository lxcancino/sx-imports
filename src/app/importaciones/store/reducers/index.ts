import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromCompras from './compras.reducer';
import * as fromEmbarques from './embarque.reducer';
import * as fromPedimentos from './pedimento.reducer';
import * as fromCuentasDeGasgos from './cuenta-gastos.reducer';
import * as fromDistribuciones from './distribucion.reducer';

export interface State {
  compras: fromCompras.State;
  embarques: fromEmbarques.State;
  pedimentos: fromPedimentos.State;
  cuentasDeGasto: fromCuentasDeGasgos.State;
  distribuciones: fromDistribuciones.State;
}

export const reducers: ActionReducerMap<State> = {
  compras: fromCompras.reducer,
  embarques: fromEmbarques.reducer,
  pedimentos: fromPedimentos.reducer,
  cuentasDeGasto: fromCuentasDeGasgos.reducer,
  distribuciones: fromDistribuciones.reducer
};

export const getState = createFeatureSelector<State>('importaciones');
