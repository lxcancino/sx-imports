import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromAduanas from '../reducers/aduana.reducer';

import { Aduana } from '@app/domain/models';

export const getAduanaState = createSelector(
  fromFeature.getState,
  (state: fromFeature.State) => state.aduanas
);

export const getAduanaEntities = createSelector(
  getAduanaState,
  fromAduanas.selectEntities
);

export const getAduanas = createSelector(
  getAduanaState,
  fromAduanas.selectAll
);

export const getSelectedAduana = createSelector(
  getAduanaEntities,
  fromRoot.getRouterState,
  (entities, router): Aduana => {
    return router.state && entities[router.state.params.aduanaId];
  }
);

export const getAduanasLoading = createSelector(
  getAduanaState,
  fromAduanas.getLoading
);

export const getAduanasLoaded = createSelector(
  getAduanaState,
  fromAduanas.getLoaded
);
