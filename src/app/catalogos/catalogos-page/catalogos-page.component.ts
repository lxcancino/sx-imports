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
      description: 'Productos ',
      icon: 'account_balance_wallet'
    }
  ];

  constructor(public media: TdMediaService) {}

  ngOnInit() {}
}
