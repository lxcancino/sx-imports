import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/store';
import * as fromStore from '../../../store';

import { Observable } from 'rxjs';

import { Embarque } from '@app/domain/models/embarques';
import { MatDialog } from '@angular/material';
import { EmbarqueCreateModalComponent } from '../../components';

@Component({
  selector: 'sxi-embarques-page',
  templateUrl: './embarques-page.component.html',
  styleUrls: ['./embarques-page.component.scss']
})
export class EmbarquesPageComponent implements OnInit {
  embarques$: Observable<Embarque[]>;

  constructor(
    private store: Store<fromStore.State>,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.embarques$ = this.store.pipe(select(fromStore.getEmbarques));
  }

  createEmbarque() {
    this.dialog
      .open(EmbarqueCreateModalComponent, {
        data: {},
        width: '550px'
      })
      .afterClosed()
      .subscribe((embarque: Embarque) => {
        if (embarque) {
          this.store.dispatch(new fromStore.CreateEmbarque({ embarque }));
        }
      });
  }

  onSelect(embarque: Embarque) {
    this.store.dispatch(
      new fromRoot.Go({ path: ['importaciones/embarques', embarque.id] })
    );
  }
}
