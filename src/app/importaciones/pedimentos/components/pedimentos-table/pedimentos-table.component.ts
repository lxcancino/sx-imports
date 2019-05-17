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

import { Pedimento } from '@app/domain/models/embarques';

@Component({
  selector: 'sxi-pedimentos-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pedimentos-table.component.html',
  styleUrls: ['./pedimentos-table.component.scss']
})
export class PedimentosTableComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  pedimentos: Pedimento[] = [];

  @Input()
  filter;

  dataSource = new MatTableDataSource<Pedimento>([]);

  @Input() displayColumns = [
    'empresa',
    'folio',
    'fecha',
    'nombre',
    'pedimento',
    'dta',
    'impuesto',
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
    if (changes.pedimentos && changes.pedimentos.currentValue) {
      this.dataSource.data = changes.pedimentos.currentValue;
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
