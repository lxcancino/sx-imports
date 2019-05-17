import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromMarcas from '../reducers/marca.reducer';

import { Marca } from '@app/domain/models';

export const getMarcaState = createSelector(
  fromFeature.getState,
  (state: fromFeature.State) => state.marcas
);

export const getMarcaEntities = createSelector(
  getMarcaState,
  fromMarcas.selectEntities
);

export const getMarcas = createSelector(
  getMarcaState,
  fromMarcas.selectAll
);

export const getSelectedMarca = createSelector(
  getMarcaEntities,
  fromRoot.getRouterState,
  (entities, router): Marca => {
    return router.state && entities[router.state.params.marcaId];
  }
);

export const getMarcasLoading = createSelector(
  getMarcaState,
  fromMarcas.getLoading
);

export const getMarcasLoaded = createSelector(
  getMarcaState,
  fromMarcas.getLoaded
);
