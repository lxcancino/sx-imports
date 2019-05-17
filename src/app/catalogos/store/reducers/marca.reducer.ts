import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Marca } from '@app/domain/models';
import { MarcaActions, MarcaActionTypes } from '../actions';

export interface State extends EntityState<Marca> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Marca> = createEntityAdapter();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(state = initialState, action: MarcaActions): State {
  switch (action.type) {
    case MarcaActionTypes.LoadMarcas: {
      return {
        ...state,
        loading: true
      };
    }
    case MarcaActionTypes.LoadMarcasFail: {
      return {
        ...state,
        loading: false
      };
    }
    case MarcaActionTypes.LoadMarcasSuccess: {
      return adapter.addAll(action.payload.marcas, {
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
