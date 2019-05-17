import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';

import { Observable } from 'rxjs';

import { Producto } from '@app/domain/models';

@Component({
  selector: 'sxi-productos-page',
  templateUrl: './productos-page.component.html',
  styleUrls: ['./productos-page.component.scss']
})
export class ProductosPageComponent implements OnInit {
  productos$: Observable<Producto[]>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.productos$ = this.store.pipe(select(fromStore.getProductos));
  }
}
