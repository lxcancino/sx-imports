import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store';

import { Observable } from 'rxjs';

import { Distribucion } from '@app/domain/models/embarques';

@Component({
  selector: 'sxi-distribuciones-page',
  templateUrl: './distribuciones-page.component.html',
  styleUrls: ['./distribuciones-page.component.scss']
})
export class DistribucionesPageComponent implements OnInit {
  distribuciones$: Observable<Distribucion[]>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.distribuciones$ = this.store.pipe(select(fromStore.getDistribuciones));
  }
}
