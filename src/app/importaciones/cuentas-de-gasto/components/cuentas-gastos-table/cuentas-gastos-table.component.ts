import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { CuentaDeGastos } from '@app/domain/models/embarques';

@Component({
  selector: 'sxi-cuentas-gastos-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cuentas-gastos-table.component.html',
  styleUrls: ['./cuentas-gastos-table.component.scss']
})
export class CuentasGastosTableComponent
  implements OnInit, OnChanges, OnDestroy {
  @Input()
  cuentas: CuentaDeGastos[] = [];

  @Input()
  filter;

  dataSource = new MatTableDataSource<CuentaDeGastos>([]);

  @Input() displayColumns = [
    'empresa',
    'folio',
    'fecha',
    'nombre',
    'embarque',
    'referencia',
    'total',
    'comentario',
    'updateUser',
    'lastUpdated',
    'operaciones'
  ];

  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @Output()
  select = new EventEmitter();
  @Output()
  edit = new EventEmitter();
  @Output()
  print = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.cuentas && changes.cuentas.currentValue) {
      this.dataSource.data = changes.cuentas.currentValue;
    }
    if (changes.filter) {
      const s = changes.filter.currentValue || '';
      this.dataSource.filter = s.toLowerCase();
    }
  }

  ngOnDestroy() {}

  onEdit($event: Event, row) {
    $event.stopPropagation();
    this.edit.emit(row);
  }

  onPrint($event: Event, row) {
    $event.stopPropagation();
    this.edit.emit(row);
  }
}
