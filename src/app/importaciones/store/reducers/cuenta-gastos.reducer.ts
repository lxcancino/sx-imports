import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { CuentaDeGastos } from '@app/domain/models/embarques';
import { CuentaDeGastosActions, CuentaDeGastosActionTypes } from '../actions';

export interface State extends EntityState<CuentaDeGastos> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<CuentaDeGastos> = createEntityAdapter();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(
  state = initialState,
  action: CuentaDeGastosActions
): State {
  switch (action.type) {
    case CuentaDeGastosActionTypes.LoadCuentasDeGastos: {
      return {
        ...state,
        loading: true
      };
    }
    case CuentaDeGastosActionTypes.LoadCuentasDeGastosFail: {
      return {
        ...state,
        loading: false
      };
    }
    case CuentaDeGastosActionTypes.LoadCuentasDeGastosSuccess: {
      return adapter.addAll(action.payload.cuentas, {
        ...state,
        loaded: true,
        loading: false
      });
    }
    default:
      return { ...state };
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
