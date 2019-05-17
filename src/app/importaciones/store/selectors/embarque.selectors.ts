import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromEmbarques from '../reducers/embarque.reducer';

import { Embarque } from '@app/domain/models/embarques';

export const getEmbarqueState = createSelector(
  fromFeature.getState,
  (state: fromFeature.State) => state.embarques
);

export const getEmbarqueEntities = createSelector(
  getEmbarqueState,
  fromEmbarques.selectEntities
);

export const getEmbarques = createSelector(
  getEmbarqueState,
  fromEmbarques.selectAll
);

export const getSelectedEmbarque = createSelector(
  getEmbarqueEntities,
  fromRoot.getRouterState,
  (entities, router): Embarque => {
    return router.state && entities[router.state.params.embarqueId];
  }
);

export const getEmbarquesLoading = createSelector(
  getEmbarqueState,
  fromEmbarques.getLoading
);

export const getEmbarquesLoaded = createSelector(
  getEmbarqueState,
  fromEmbarques.getLoaded
);
