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

import { Embarque } from '@app/domain/models/embarques';

@Component({
  selector: 'sxi-embarques-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './embarques-table.component.html',
  styleUrls: ['./embarques-table.component.scss']
})
export class EmbarquesTableComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  embarques: Embarque[] = [];

  @Input()
  filter;

  dataSource = new MatTableDataSource<Embarque>([]);

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
    if (changes.embarques && changes.embarques.currentValue) {
      this.dataSource.data = changes.embarques.currentValue;
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
