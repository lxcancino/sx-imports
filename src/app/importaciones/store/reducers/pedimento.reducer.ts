import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Pedimento } from '@app/domain/models/embarques';
import { PedimentoActions, PedimentoActionTypes } from '../actions';

export interface State extends EntityState<Pedimento> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Pedimento> = createEntityAdapter();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(state = initialState, action: PedimentoActions): State {
  switch (action.type) {
    case PedimentoActionTypes.LoadPedimentos: {
      return {
        ...state,
        loading: true
      };
    }
    case PedimentoActionTypes.LoadPedimentosFail: {
      return {
        ...state,
        loading: false
      };
    }
    case PedimentoActionTypes.LoadPedimentosSuccess: {
      return adapter.addAll(action.payload.pedimentos, {
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
