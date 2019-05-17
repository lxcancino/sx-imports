import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Clase } from '@app/domain/models';
import { ClaseActions, ClaseActionTypes } from '../actions';

export interface State extends EntityState<Clase> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Clase> = createEntityAdapter();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(state = initialState, action: ClaseActions): State {
  switch (action.type) {
    case ClaseActionTypes.LoadClases: {
      return {
        ...state,
        loading: true
      };
    }
    case ClaseActionTypes.LoadClasesFail: {
      return {
        ...state,
        loading: false
      };
    }
    case ClaseActionTypes.LoadClasesSuccess: {
      return adapter.addAll(action.payload.clases, {
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
