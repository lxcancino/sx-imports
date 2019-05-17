import { NavigationRoute } from '@app/core/models';

export const MainNavigation: NavigationRoute[] = [
  {
    icon: 'assignment',
    route: '/catalogos',
    title: 'Catálogos'
  },
  {
    icon: 'shopping_basket',
    route: '/ventas',
    title: 'Ventas'
  },
  {
    icon: 'flight_takeoff',
    route: '/importaciones',
    title: 'Importaciones'
  },
  {
    icon: 'receipt',
    route: '/cxc',
    title: 'Cuentas por cobrar'
  },
  {
    icon: 'payment',
    route: '/cxp',
    title: 'Cuentas por pagar'
  },
  {
    route: '/tesoreria',
    title: 'Tesorería',
    icon: 'account_balance'
  },
  {
    route: '/contabilidad',
    title: 'Contabilidad',
    icon: 'account_balance_wallet'
  },
  {
    route: '/contabilidad/sat',
    title: 'Contabilidad SAT',
    icon: 'view_quilt'
  },

  {
    route: '/sistemas',
    title: 'Sistemas',
    icon: ''
  }
];
