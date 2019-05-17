import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { Linea } from '@app/domain/models';

@Component({
  selector: 'sxi-lineas-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './lineas-table.component.html',
  styleUrls: ['./lineas-table.component.scss']
})
export class LineasTableComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _lineas: Linea[];

  // tslint:disable-next-line: variable-name
  private _filter: string = '';

  dataSource = new MatTableDataSource<Linea>([]);

  displayColumns = ['nombre', 'descripcion', 'activa', 'lastUpdated'];

  @ViewChild(MatSort)
  sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  get lineas() {
    return this._lineas;
  }

  @Input()
  set lineas(data: Linea[]) {
    this._lineas = data;
    this.dataSource.data = data;
  }

  @Input()
  set filter(term: string) {
    this._filter = term || '';
    this.dataSource.filter = this._filter.toLowerCase();
  }

  get filter() {
    return this._filter;
  }
}
