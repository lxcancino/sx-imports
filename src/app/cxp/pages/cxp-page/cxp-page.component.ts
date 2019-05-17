import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'sxi-cxp-page',
  template: `
    <sxi-nav-list-page title="Cuentas por pagar" [navigation]="navigation">
    </sxi-nav-list-page>
  `,
  styles: []
})
export class CxpPageComponent implements OnInit {
  navigation: any[] = [
    {
      route: 'facturas',
      title: 'Facturas',
      icon: 'F'
    },
    {
      route: 'pagos',
      title: 'Pagos',
      icon: 'P'
    },
    {
      route: 'notasDeCredito',
      title: 'Notas de Crédito',
      icon: 'NC'
    },
    {
      route: 'requisiciones',
      title: 'Requisiciones',
      icon: 'R'
    },
    {
      route: 'asimilados',
      title: 'Nómina asimilados',
      icon: 'AS'
    }
  ];

  constructor(public media: TdMediaService) {}

  ngOnInit() {}
}
