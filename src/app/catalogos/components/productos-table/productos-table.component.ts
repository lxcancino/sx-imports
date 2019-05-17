import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { Producto } from '@app/domain/models';

@Component({
  selector: 'sxi-productos-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './productos-table.component.html',
  styleUrls: ['./productos-table.component.scss']
})
export class ProductosTableComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _productos: Producto[];

  // tslint:disable-next-line: variable-name
  private _filter: string = '';

  dataSource = new MatTableDataSource<Producto>([]);

  displayColumns = [
    'clave',
    'descripcion',
    'unidad',
    'linea',
    'marca',
    'clase',
    'kilos',
    'gramos',
    'updateUser',
    'lastUpdated'
  ];

  @ViewChild(MatSort)
  sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  get productos() {
    return this._productos;
  }

  @Input()
  set productos(data: Producto[]) {
    this._productos = data;
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
