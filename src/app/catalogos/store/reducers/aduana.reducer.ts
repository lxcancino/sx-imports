import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Aduana } from '@app/domain/models';
import { AduanaActions, AduanaActionTypes } from '../actions';

export interface State extends EntityState<Aduana> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Aduana> = createEntityAdapter();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(state = initialState, action: AduanaActions): State {
  switch (action.type) {
    case AduanaActionTypes.LoadAduanas: {
      return {
        ...state,
        loading: true
      };
    }
    case AduanaActionTypes.LoadAduanasFail: {
      return {
        ...state,
        loading: false
      };
    }
    case AduanaActionTypes.LoadAduanasSuccess: {
      return adapter.addAll(action.payload.aduanas, {
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
