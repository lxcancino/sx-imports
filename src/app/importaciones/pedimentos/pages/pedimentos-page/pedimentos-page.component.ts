import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store';

import { Observable } from 'rxjs';

import { Pedimento } from '@app/domain/models/embarques';

@Component({
  selector: 'sxi-pedimentos-page',
  templateUrl: './pedimentos-page.component.html',
  styleUrls: ['./pedimentos-page.component.scss']
})
export class PedimentosPageComponent implements OnInit {
  pedimentos$: Observable<Pedimento[]>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.pedimentos$ = this.store.pipe(select(fromStore.getPedimentos));
  }

  reload() {
    this.store.dispatch(new fromStore.LoadPedimentos());
  }
}
