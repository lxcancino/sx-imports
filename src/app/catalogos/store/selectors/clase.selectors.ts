import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromClases from '../reducers/clase.reducer';

import { Clase } from '@app/domain/models';

export const getClaseState = createSelector(
  fromFeature.getState,
  (state: fromFeature.State) => state.clases
);

export const getClaseEntities = createSelector(
  getClaseState,
  fromClases.selectEntities
);

export const getClases = createSelector(
  getClaseState,
  fromClases.selectAll
);

export const getSelectedClase = createSelector(
  getClaseEntities,
  fromRoot.getRouterState,
  (entities, router): Clase => {
    return router.state && entities[router.state.params.claseId];
  }
);

export const getClasesLoading = createSelector(
  getClaseState,
  fromClases.getLoading
);

export const getClasesLoaded = createSelector(
  getClaseState,
  fromClases.getLoaded
);
