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

import { Compra } from '@app/domain/models/compras';

@Component({
  selector: 'sxi-compras-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './compras-table.component.html',
  styleUrls: ['./compras-table.component.scss']
})
export class ComprasTableComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  compras: Compra[] = [];

  @Input()
  filter;

  dataSource = new MatTableDataSource<Compra>([]);

  @Input() displayColumns = [
    'empresa',
    'folio',
    'fecha',
    'nombre',
    'moneda',
    'tipoDeCambio',
    'total',
    'comentario',
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
    if (changes.compras && changes.compras.currentValue) {
      this.dataSource.data = changes.compras.currentValue;
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
