import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store';

import { Observable } from 'rxjs';

import { Embarque } from '@app/domain/models/embarques';

@Component({
  selector: 'sxi-embarques-page',
  templateUrl: './embarques-page.component.html',
  styleUrls: ['./embarques-page.component.scss']
})
export class EmbarquesPageComponent implements OnInit {
  embarques$: Observable<Embarque[]>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.embarques$ = this.store.pipe(select(fromStore.getEmbarques));
  }
}
