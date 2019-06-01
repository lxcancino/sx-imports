import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTable, MatTableDataSource, MatSort } from '@angular/material';

import { CompraDet } from '@app/domain/models/compras';

import { sumBy } from 'lodash/math';

@Component({
  selector: 'sxi-compra-partidas',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './compra-partidas.component.html',
  styleUrls: ['./compra-partidas.component.scss']
})
export class CompraPartidasComponent implements OnInit, OnChanges {
  @Input()
  partidas: CompraDet[] = [];

  @Input()
  parent: FormGroup;

  @Input()
  readOnly = false;

  @Output()
  update = new EventEmitter();

  @Output()
  edit = new EventEmitter();

  @Output()
  delete = new EventEmitter();

  @ViewChild(MatSort)
  sort: MatSort;

  dataSource = new MatTableDataSource<CompraDet>([]);

  displayColumns = [
    'index',
    'clave',
    'descripcion',
    'solicitado',
    'precio',
    'importe',
    'operaciones'
  ];

  @ViewChild('table')
  table: MatTable<CompraDet>;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.partidas && changes.partidas.currentValue) {
      this.dataSource.data = changes.partidas.currentValue;
    }
  }

  ngOnInit() {}

  refresh() {
    this.table.renderRows();
  }

  get subtotal() {
    return sumBy(this.dataSource.filteredData, 'importe');
  }
}
