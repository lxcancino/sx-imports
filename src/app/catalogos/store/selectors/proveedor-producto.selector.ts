import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromProveedorProductos from '../reducers/proveedor-producto.reducer';

import { ProveedorProducto } from '@app/domain/models';

export const getProveedorProductoState = createSelector(
  fromFeature.getState,
  (state: fromFeature.State) => state.proveedorProductos
);

export const getProveedorProductoEntities = createSelector(
  getProveedorProductoState,
  fromProveedorProductos.selectEntities
);

export const getProveedorProductos = createSelector(
  getProveedorProductoState,
  fromProveedorProductos.selectAll
);

export const getProveedorProductosLoading = createSelector(
  getProveedorProductoState,
  fromProveedorProductos.getLoading
);
