import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';

import { Observable } from 'rxjs';

import { Aduana } from '@app/domain/models';

@Component({
  selector: 'sxi-aduanas-page',
  templateUrl: './aduanas-page.component.html',
  styleUrls: ['./aduanas-page.component.scss']
})
export class AduanasPageComponent implements OnInit {
  aduanas$: Observable<Aduana[]>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.aduanas$ = this.store.pipe(select(fromStore.getAduanas));
  }
}
