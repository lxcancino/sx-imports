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
}

export const initialState: State = {
  config: {
    name: 'Nombre del proyecto',
    shortDescription: 'Descripción corta del proyecto',
    longDescription: 'Descripción detallada del proyecto',
    logoUrl: undefined
  },
  globalLoading: false
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

    default: {
      return state;
    }
  }
}

export const getAppConfig = (state: State) => state.config;

export const getMainNavigation = (state: State) => state.mainNavigation;

export const getGlobalLoading = (state: State) => state.globalLoading;
