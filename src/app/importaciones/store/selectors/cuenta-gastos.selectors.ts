import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromCuentas from '../reducers/cuenta-gastos.reducer';

import { CuentaDeGastos } from '@app/domain/models/embarques';

export const getCuentaDeGastosState = createSelector(
  fromFeature.getState,
  (state: fromFeature.State) => state.cuentasDeGasto
);

export const getCuentasDeGastosEntities = createSelector(
  getCuentaDeGastosState,
  fromCuentas.selectEntities
);

export const getCuentasDeGastos = createSelector(
  getCuentaDeGastosState,
  fromCuentas.selectAll
);

export const getSelectedCuentaDeGastos = createSelector(
  getCuentasDeGastosEntities,
  fromRoot.getRouterState,
  (entities, router): CuentaDeGastos => {
    return router.state && entities[router.state.params.embarqueId];
  }
);

export const getCuentasDeGastossLoading = createSelector(
  getCuentaDeGastosState,
  fromCuentas.getLoading
);

export const getCuentasDeGastossLoaded = createSelector(
  getCuentaDeGastosState,
  fromCuentas.getLoaded
);
