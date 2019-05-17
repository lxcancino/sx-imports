import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromDistribuciones from '../reducers/distribucion.reducer';

import { Distribucion } from '@app/domain/models/embarques';

export const getDistribucionState = createSelector(
  fromFeature.getState,
  (state: fromFeature.State) => state.distribuciones
);

export const getDistribucionEntities = createSelector(
  getDistribucionState,
  fromDistribuciones.selectEntities
);

export const getDistribuciones = createSelector(
  getDistribucionState,
  fromDistribuciones.selectAll
);

export const getSelectedDistribucion = createSelector(
  getDistribucionEntities,
  fromRoot.getRouterState,
  (entities, router): Distribucion => {
    return router.state && entities[router.state.params.distribucionId];
  }
);

export const getDistribucionesLoading = createSelector(
  getDistribucionState,
  fromDistribuciones.getLoading
);

export const getDistribucionesLoaded = createSelector(
  getDistribucionState,
  fromDistribuciones.getLoaded
);
