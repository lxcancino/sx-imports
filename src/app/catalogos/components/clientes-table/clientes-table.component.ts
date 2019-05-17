import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { Cliente } from '@app/domain/models';

@Component({
  selector: 'sxi-clientes-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './clientes-table.component.html',
  styleUrls: ['./clientes-table.component.scss']
})
export class ClientesTableComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _clientes: Cliente[];

  // tslint:disable-next-line: variable-name
  private _filter = '';

  dataSource = new MatTableDataSource<Cliente>([]);

  displayColumns = ['nombre', 'rfc', 'email', 'updateUser', 'lastUpdated'];

  @ViewChild(MatSort)
  sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  get clientes() {
    return this._clientes;
  }

  @Input()
  set clientes(data: Cliente[]) {
    this._clientes = data;
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
