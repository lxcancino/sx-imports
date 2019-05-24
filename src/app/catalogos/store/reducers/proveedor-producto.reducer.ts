import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { ProveedorProducto } from '@app/domain/models';
import {
  ProveedorProductoActions,
  ProveedorProductoActionTypes
} from '../actions';

export interface State extends EntityState<ProveedorProducto> {
  loading: boolean;
}

export const adapter: EntityAdapter<ProveedorProducto> = createEntityAdapter();

export const initialState: State = adapter.getInitialState({
  loading: false
});

export function reducer(
  state = initialState,
  action: ProveedorProductoActions
): State {
  switch (action.type) {
    case ProveedorProductoActionTypes.LoadProveedorProducto: {
      return {
        ...state,
        loading: true
      };
    }
    case ProveedorProductoActionTypes.LoadProveedorProductoFail: {
      return {
        ...state,
        loading: false
      };
    }
    case ProveedorProductoActionTypes.LoadProveedorProductoSuccess: {
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
