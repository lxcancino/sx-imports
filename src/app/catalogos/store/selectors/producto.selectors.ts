import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromProductos from '../reducers/producto.reducer';

import { Producto } from '@app/domain/models';

export const getProductoState = createSelector(
  fromFeature.getState,
  (state: fromFeature.State) => state.productos
);

export const getProductoEntities = createSelector(
  getProductoState,
  fromProductos.selectEntities
);

export const getProductos = createSelector(
  getProductoState,
  fromProductos.selectAll
);

export const getSelectedProducto = createSelector(
  getProductoEntities,
  fromRoot.getRouterState,
  (entities, router): Producto => {
    return router.state && entities[router.state.params.proveedorId];
  }
);

export const getProductosLoading = createSelector(
  getProductoState,
  fromProductos.getLoading
);

export const getProductosLoaded = createSelector(
  getProductoState,
  fromProductos.getLoaded
);
