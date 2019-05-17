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

import { Distribucion } from '@app/domain/models/embarques';

@Component({
  selector: 'sxi-distribuciones-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './distribuciones-table.component.html',
  styleUrls: ['./distribuciones-table.component.scss']
})
export class DistribucionsTableComponent
  implements OnInit, OnChanges, OnDestroy {
  @Input()
  distribuciones: Distribucion[] = [];

  @Input()
  filter;

  dataSource = new MatTableDataSource<Distribucion>([]);

  @Input() displayColumns = [
    'empresa',
    'folio',
    'fecha',
    'nombre',
    'aduana',
    'bl',
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
    if (changes.distribuciones && changes.distribuciones.currentValue) {
      this.dataSource.data = changes.distribuciones.currentValue;
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
