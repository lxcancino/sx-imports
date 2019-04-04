import { NavigationRoute } from '@app/core/models';

export const MainNavigation: NavigationRoute[] = [
  {
    icon: 'people',
    route: '/clientes',
    title: 'Clientes'
  },
  {
    icon: 'assignment',
    route: 'catalogos',
    title: 'Catálogos'
  },
  {
    icon: 'my_library_books',
    route: '/credito',
    title: 'Crédito'
  },
  {
    icon: 'local_atm',
    route: 'cobranza/con',
    title: 'Cobranza contado'
  },

  {
    icon: 'speaker_notes',
    route: 'cobranza/che',
    title: 'Cobranza CHE'
  },
  {
    icon: 'device_hub',
    route: 'cobranza/jur',
    title: 'Cobranza JUR'
  }
];
