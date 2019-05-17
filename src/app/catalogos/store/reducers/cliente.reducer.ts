import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Cliente } from '@app/domain/models';
import { ClienteActions, ClienteActionTypes } from '../actions/cliente.actions';

export interface State extends EntityState<Cliente> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Cliente> = createEntityAdapter();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(state = initialState, action: ClienteActions): State {
  switch (action.type) {
    case ClienteActionTypes.LoadClientes: {
      return {
        ...state,
        loading: true
      };
    }
    case ClienteActionTypes.LoadClientesFail: {
      return {
        ...state,
        loading: false
      };
    }
    case ClienteActionTypes.LoadClientesSuccess: {
      return adapter.addAll(action.payload.clientes, {
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
