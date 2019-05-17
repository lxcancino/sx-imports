import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';

import { Observable } from 'rxjs';

import { Proveedor } from '@app/domain/models';

@Component({
  selector: 'sxi-proveedores-page',
  templateUrl: './proveedores-page.component.html',
  styleUrls: ['./proveedores-page.component.scss']
})
export class ProveedoresPageComponent implements OnInit {
  proveedores$: Observable<Proveedor[]>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.proveedores$ = this.store.pipe(select(fromStore.getProveedores));
  }
}
