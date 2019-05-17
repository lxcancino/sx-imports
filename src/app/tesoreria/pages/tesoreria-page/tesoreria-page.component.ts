import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'sxi-resoreria-page',
  template: `
    <sxi-nav-list-page title="Tesorería" [navigation]="navigation">
    </sxi-nav-list-page>
  `,
  styles: []
})
export class TesoreriaPageComponent implements OnInit {
  navigation: any[] = [
    {
      route: 'compras',
      title: 'Compras',
      icon: 'shopping_cart'
    },
    {
      route: 'embarques',
      title: 'Embarques',
      icon: 'directions_boat'
    },
    {
      route: 'pedimentos',
      title: 'Pedimentos',
      icon: 'traffic'
    },
    {
      route: 'cuentasDeGasto',
      title: 'Cuentas de gastos',
      icon: 'G'
    },
    {
      route: 'distribucion',
      title: 'Distribución',
      icon: 'local_shipping'
    }
  ];

  constructor(public media: TdMediaService) {}

  ngOnInit() {}
}
