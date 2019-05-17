import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';

import { Observable } from 'rxjs';

import { Linea } from '@app/domain/models';

@Component({
  selector: 'sxi-lineas-page',
  templateUrl: './lineas-page.component.html',
  styleUrls: ['./lineas-page.component.scss']
})
export class LineasPageComponent implements OnInit {
  lineas$: Observable<Linea[]>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.lineas$ = this.store.pipe(select(fromStore.getLineas));
  }
}
