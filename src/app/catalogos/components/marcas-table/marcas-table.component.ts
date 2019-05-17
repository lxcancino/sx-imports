import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { Marca } from '@app/domain/models';

@Component({
  selector: 'sxi-marcas-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './marcas-table.component.html',
  styleUrls: ['./marcas-table.component.scss']
})
export class MarcasTableComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _marcas: Marca[];

  // tslint:disable-next-line: variable-name
  private _filter = '';

  dataSource = new MatTableDataSource<Marca>([]);

  displayColumns = ['nombre', 'descripcion', 'activa', 'lastUpdated'];

  @ViewChild(MatSort)
  sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  get marcas() {
    return this._marcas;
  }

  @Input()
  set marcas(data: Marca[]) {
    this._marcas = data;
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
