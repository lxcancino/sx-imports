import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { Clase } from '@app/domain/models';

@Component({
  selector: 'sxi-clases-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './clases-table.component.html',
  styleUrls: ['./clases-table.component.scss']
})
export class ClasesTableComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _clases: Clase[];

  // tslint:disable-next-line: variable-name
  private _filter: string = '';

  dataSource = new MatTableDataSource<Clase>([]);

  displayColumns = ['nombre', 'descripcion', 'activa', 'lastUpdated'];

  @ViewChild(MatSort)
  sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  get clases() {
    return this._clases;
  }

  @Input()
  set clases(data: Clase[]) {
    this._clases = data;
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
