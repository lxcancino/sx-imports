import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '@app/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'sxi-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainToolbarComponent implements OnInit {
  empresa$: Observable<string>;
  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.empresa$ = this.store.pipe(select(fromRoot.getTenant));
  }

  cambiarEmpresa(empresa) {
    const tenant = empresa === 'PAPER' ? 'IMPAP' : 'PAPER';
    this.store.dispatch(new fromRoot.SetCurrentTenant({ tenant }));
  }
}
