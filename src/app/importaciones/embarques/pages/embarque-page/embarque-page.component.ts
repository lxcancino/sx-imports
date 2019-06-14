import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Embarque, EmbarqueDet } from '@app/domain/models/embarques';

@Component({
  selector: 'sxi-page-create',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './embarque-page.component.html',
  styleUrls: ['./embarque-page.component.scss']
})
export class EmbarquePageComponent implements OnInit {
  embarque$: Observable<Embarque>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.embarque$ = this.store.pipe(select(fromStore.getSelectedEmbarque));
  }
  onEdit(event: EmbarqueDet) {
    console.log('Drill: ', event);
  }
  onFactura(event: EmbarqueDet) {
    console.log('Find Factura: ', event);
  }
}
