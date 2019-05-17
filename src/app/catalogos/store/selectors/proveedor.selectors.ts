import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromProveedores from '../reducers/proveedor.reducer';

import { Proveedor } from '@app/domain/models';

export const getProveedorState = createSelector(
  fromFeature.getState,
  (state: fromFeature.State) => state.proveedores
);

export const getProveedorEntities = createSelector(
  getProveedorState,
  fromProveedores.selectEntities
);

export const getProveedores = createSelector(
  getProveedorState,
  fromProveedores.selectAll
);

export const getSelectedProveedor = createSelector(
  getProveedorEntities,
  fromRoot.getRouterState,
  (entities, router): Proveedor => {
    return router.state && entities[router.state.params.proveedorId];
  }
);

export const getProveedoresLoading = createSelector(
  getProveedorState,
  fromProveedores.getLoading
);

export const getProveedoresLoaded = createSelector(
  getProveedorState,
  fromProveedores.getLoaded
);
