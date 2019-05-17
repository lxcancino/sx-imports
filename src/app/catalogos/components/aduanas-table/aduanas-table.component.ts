import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { Aduana } from '@app/domain/models';

@Component({
  selector: 'sxi-aduanas-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './aduanas-table.component.html',
  styleUrls: ['./aduanas-table.component.scss']
})
export class AduanasTableComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _aduanas: Aduana[];

  // tslint:disable-next-line: variable-name
  private _filter: string = '';

  dataSource = new MatTableDataSource<Aduana>([]);

  displayColumns = [
    'nombre',
    'calle',
    'colonia',
    'municipio',
    'estado',
    'lastUpdated'
  ];

  @ViewChild(MatSort)
  sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  get aduanas() {
    return this._aduanas;
  }

  @Input()
  set aduanas(data: Aduana[]) {
    this._aduanas = data;
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
