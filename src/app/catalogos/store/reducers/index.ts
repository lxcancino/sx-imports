import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromLineas from './linea.reducer';

export interface State {
  lineas: fromLineas.State;
}

export const reducers: ActionReducerMap<State> = {
  lineas: fromLineas.reducer
};

export const getState = createFeatureSelector<State>('catalogos');
