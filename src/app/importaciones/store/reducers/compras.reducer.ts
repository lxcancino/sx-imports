import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Compra } from '@app/domain/models/compras';
import { CompraActions, CompraActionTypes } from '../actions';

export interface State extends EntityState<Compra> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Compra> = createEntityAdapter();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(state = initialState, action: CompraActions): State {
  switch (action.type) {
    case CompraActionTypes.LoadCompras: {
      return {
        ...state,
        loading: true
      };
    }
    case CompraActionTypes.LoadComprasFail: {
      return {
        ...state,
        loading: false
      };
    }
    case CompraActionTypes.LoadComprasSuccess: {
      return adapter.addAll(action.payload.compras, {
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
