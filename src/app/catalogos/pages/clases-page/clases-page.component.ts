import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';

import { Observable } from 'rxjs';

import { Clase } from '@app/domain/models';

@Component({
  selector: 'sxi-clases-page',
  templateUrl: './clases-page.component.html',
  styleUrls: ['./clases-page.component.scss']
})
export class ClasesPageComponent implements OnInit {
  clases$: Observable<Clase[]>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.clases$ = this.store.pipe(select(fromStore.getClases));
  }
}
