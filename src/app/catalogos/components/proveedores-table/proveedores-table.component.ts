import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { Proveedor } from '@app/domain/models';

@Component({
  selector: 'sxi-proveedores-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './proveedores-table.component.html',
  styleUrls: ['./proveedores-table.component.scss']
})
export class ProveedoresTableComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _proveedores: Proveedor[];

  // tslint:disable-next-line: variable-name
  private _filter = '';

  dataSource = new MatTableDataSource<Proveedor>([]);

  displayColumns = ['nombre', 'rfc', 'email', 'updateUser', 'lastUpdated'];

  @ViewChild(MatSort)
  sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  get proveedores() {
    return this._proveedores;
  }

  @Input()
  set proveedores(data: Proveedor[]) {
    this._proveedores = data;
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
