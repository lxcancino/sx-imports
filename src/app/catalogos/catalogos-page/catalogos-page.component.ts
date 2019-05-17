import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'sxi-catalogos-page',
  templateUrl: './catalogos-page.component.html',
  styleUrls: ['./catalogos-page.component.scss']
})
export class CatalogosPageComponent implements OnInit {
  navigation: any[] = [
    {
      route: 'productos',
      title: 'Productos',
      description: 'Catálogo de Productos',
      icon: 'layers'
    },
    {
      route: 'proveedores',
      title: 'Proveedores',
      icon: 'people_outline'
    },
    {
      route: 'aduanas',
      title: 'Aduanas',
      icon: 'account_balance'
    },
    {
      route: 'lineas',
      title: 'Lineas',
      description: 'Lineas de productos ',
      icon: 'account_balance_wallet'
    },
    {
      route: 'clases',
      title: 'Clases',
      descripcion: 'Clases de productos',
      icon: 'format_align_justify'
    },
    {
      route: 'marcas',
      title: 'Marcas',
      descripcion: 'Marcas de productos',
      icon: 'domain'
    },
    {
      route: 'clientes',
      title: 'Clientes',
      icon: 'people'
    }
  ];

  constructor(public media: TdMediaService) {}

  ngOnInit() {}
}
