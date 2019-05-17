import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Embarque } from '@app/domain/models/embarques';
import { EmbarqueActions, EmbarqueActionTypes } from '../actions';

export interface State extends EntityState<Embarque> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Embarque> = createEntityAdapter();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(state = initialState, action: EmbarqueActions): State {
  switch (action.type) {
    case EmbarqueActionTypes.LoadEmbarques: {
      return {
        ...state,
        loading: true
      };
    }
    case EmbarqueActionTypes.LoadEmbarquesFail: {
      return {
        ...state,
        loading: false
      };
    }
    case EmbarqueActionTypes.LoadEmbarquesSuccess: {
      return adapter.addAll(action.payload.embarques, {
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
