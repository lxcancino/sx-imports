import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';

import { Observable } from 'rxjs';

import { Clase } from '@app/domain/models';

@Component({
  selector: 'sxi-marcas-page',
  templateUrl: './marcas-page.component.html',
  styleUrls: ['./marcas-page.component.scss']
})
export class MarcasPageComponent implements OnInit {
  marcas$: Observable<Clase[]>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.marcas$ = this.store.pipe(select(fromStore.getMarcas));
  }
}
