import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Distribucion } from '@app/domain/models/embarques';
import { DistribucionActions, DistribucionActionTypes } from '../actions';

export interface State extends EntityState<Distribucion> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Distribucion> = createEntityAdapter();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(
  state = initialState,
  action: DistribucionActions
): State {
  switch (action.type) {
    case DistribucionActionTypes.LoadDistribuciones: {
      return {
        ...state,
        loading: true
      };
    }
    case DistribucionActionTypes.LoadDistribucionesFail: {
      return {
        ...state,
        loading: false
      };
    }
    case DistribucionActionTypes.LoadDistribucionesSuccess: {
      return adapter.addAll(action.payload.distribuciones, {
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
