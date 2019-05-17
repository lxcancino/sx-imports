import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Producto } from '@app/domain/models';
import { ProductoActions, ProductoActionTypes } from '../actions';

export interface State extends EntityState<Producto> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Producto> = createEntityAdapter();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(state = initialState, action: ProductoActions): State {
  switch (action.type) {
    case ProductoActionTypes.LoadProductos: {
      return {
        ...state,
        loading: true
      };
    }
    case ProductoActionTypes.LoadProductosFail: {
      return {
        ...state,
        loading: false
      };
    }
    case ProductoActionTypes.LoadProductosSuccess: {
      return adapter.addAll(action.payload.productos, {
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
