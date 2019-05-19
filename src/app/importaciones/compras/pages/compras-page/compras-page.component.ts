import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store';

import { Observable } from 'rxjs';

import { Compra } from '@app/domain/models/compras';

@Component({
  selector: 'sxi-compras-page',
  templateUrl: './compras-page.component.html',
  styleUrls: ['./compras-page.component.scss']
})
export class ComprasPageComponent implements OnInit {
  compras$: Observable<Compra[]>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.compras$ = this.store.pipe(select(fromStore.getCompras));
  }

  create() {}
}
