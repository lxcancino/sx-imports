import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromLineas from '../reducers/linea.reducer';

import { Linea } from '@app/domain/models';

export const getLineaState = createSelector(
  fromFeature.getState,
  (state: fromFeature.State) => state.lineas
);

export const getLineaEntities = createSelector(
  getLineaState,
  fromLineas.selectEntities
);

export const getLineas = createSelector(
  getLineaState,
  fromLineas.selectAll
);

export const getSelectedLinea = createSelector(
  getLineaEntities,
  fromRoot.getRouterState,
  (entities, router): Linea => {
    return router.state && entities[router.state.params.lineaId];
  }
);

export const getLineasLoading = createSelector(
  getLineaState,
  fromLineas.getLoading
);

export const getLineasLoaded = createSelector(
  getLineaState,
  fromLineas.getLoaded
);
