import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromCompras from '../reducers/compras.reducer';

import { Compra } from '@app/domain/models/compras';

export const getCompraState = createSelector(
  fromFeature.getState,
  (state: fromFeature.State) => state.compras
);

export const getCompraEntities = createSelector(
  getCompraState,
  fromCompras.selectEntities
);

export const getCompras = createSelector(
  getCompraState,
  fromCompras.selectAll
);

export const getSelectedCompra = createSelector(
  getCompraEntities,
  fromRoot.getRouterState,
  (entities, router): Compra => {
    return router.state && entities[router.state.params.compraId];
  }
);

export const getComprasLoading = createSelector(
  getCompraState,
  fromCompras.getLoading
);

export const getComprasLoaded = createSelector(
  getCompraState,
  fromCompras.getLoaded
);
