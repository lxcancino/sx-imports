import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromPedimentos from '../reducers/pedimento.reducer';

import { Pedimento } from '@app/domain/models/embarques';

export const getPedimentoState = createSelector(
  fromFeature.getState,
  (state: fromFeature.State) => state.pedimentos
);

export const getPedimentoEntities = createSelector(
  getPedimentoState,
  fromPedimentos.selectEntities
);

export const getPedimentos = createSelector(
  getPedimentoState,
  fromPedimentos.selectAll
);

export const getSelectedPedimento = createSelector(
  getPedimentoEntities,
  fromRoot.getRouterState,
  (entities, router): Pedimento => {
    return router.state && entities[router.state.params.pedimentoId];
  }
);

export const getPedimentosLoading = createSelector(
  getPedimentoState,
  fromPedimentos.getLoading
);

export const getPedimentosLoaded = createSelector(
  getPedimentoState,
  fromPedimentos.getLoaded
);
