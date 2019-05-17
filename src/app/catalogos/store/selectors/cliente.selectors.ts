import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromClientes from '../reducers/cliente.reducer';

import { Cliente } from '@app/domain/models';

export const getClienteState = createSelector(
  fromFeature.getState,
  (state: fromFeature.State) => state.clientes
);

export const getClienteEntities = createSelector(
  getClienteState,
  fromClientes.selectEntities
);

export const getClientes = createSelector(
  getClienteState,
  fromClientes.selectAll
);

export const getSelectedCliente = createSelector(
  getClienteEntities,
  fromRoot.getRouterState,
  (entities, router): Cliente => {
    return router.state && entities[router.state.params.clienteId];
  }
);

export const getClientesLoading = createSelector(
  getClienteState,
  fromClientes.getLoading
);

export const getClientesLoaded = createSelector(
  getClienteState,
  fromClientes.getLoaded
);
