import {
  ApplicationActions,
  ApplicationActionTypes
} from '../actions/application.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppConfig, NavigationRoute } from '@app/core/models';

export interface State {
  config: AppConfig;
  globalLoading: boolean;
  mainNavigation?: NavigationRoute[];
  tenant: 'PAPER' | 'IMPAP';
}

export const initialState: State = {
  config: {
    name: 'Nombre del proyecto',
    shortDescription: 'Descripción corta del proyecto',
    longDescription: 'Descripción detallada del proyecto',
    logoUrl: undefined
  },
  globalLoading: false,
  tenant: 'PAPER'
};

export function reducer(
  state = initialState,
  action: ApplicationActions
): State {
  switch (action.type) {
    case ApplicationActionTypes.SetAppConfig: {
      const config = action.payload.config;
      return {
        ...state,
        config
      };
    }
    case ApplicationActionTypes.SetMainNavigation: {
      return {
        ...state,
        mainNavigation: action.payload.navigation
      };
    }
    case ApplicationActionTypes.SetGlobalLoading: {
      const globalLoading = action.payload.loading;
      return {
        ...state,
        globalLoading
      };
    }

    case ApplicationActionTypes.SetCurrentTenant: {
      return {
        ...state,
        tenant: action.payload.tenant
      };
    }

    default: {
      return state;
    }
  }
}

export const getAppConfig = (state: State) => state.config;

export const getMainNavigation = (state: State) => state.mainNavigation;

export const getGlobalLoading = (state: State) => state.globalLoading;

export const getTenant = (state: State) => state.tenant;
