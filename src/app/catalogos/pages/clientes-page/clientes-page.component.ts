import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';

import { Observable } from 'rxjs';

import { Cliente } from '@app/domain/models';

@Component({
  selector: 'sxi-clientes-page',
  templateUrl: './clientes-page.component.html',
  styleUrls: ['./clientes-page.component.scss']
})
export class ClientesPageComponent implements OnInit {
  clientes$: Observable<Cliente[]>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.clientes$ = this.store.pipe(select(fromStore.getClientes));
  }
}
