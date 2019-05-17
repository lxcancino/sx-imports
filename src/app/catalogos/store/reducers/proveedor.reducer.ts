import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Proveedor } from '@app/domain/models';
import { ProveedorActions, ProveedorActionTypes } from '../actions';

export interface State extends EntityState<Proveedor> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Proveedor> = createEntityAdapter();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(state = initialState, action: ProveedorActions): State {
  switch (action.type) {
    case ProveedorActionTypes.LoadProveedores: {
      return {
        ...state,
        loading: true
      };
    }
    case ProveedorActionTypes.LoadProveedoresFail: {
      return {
        ...state,
        loading: false
      };
    }
    case ProveedorActionTypes.LoadProveedoresSuccess: {
      return adapter.addAll(action.payload.proveedores, {
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
