import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Linea } from '@app/domain/models';
import { LineaActions, LineaActionTypes } from '../actions';

export interface State extends EntityState<Linea> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Linea> = createEntityAdapter();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(state = initialState, action: LineaActions): State {
  switch (action.type) {
    case LineaActionTypes.LoadLineas: {
      return {
        ...state,
        loading: true
      };
    }
    case LineaActionTypes.LoadLineasFail: {
      return {
        ...state,
        loading: false
      };
    }
    case LineaActionTypes.LoadLineasSuccess: {
      return adapter.addAll(action.payload.lineas, {
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
