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

import { MatTable, MatTableDataSource, MatSort } from '@angular/material';

import { sumBy, round } from 'lodash';

import { EmbarqueDet } from '@app/domain/models/embarques';

@Component({
  selector: 'sxi-lista-de-empaque',
  templateUrl: './lista-de-empaque.component.html',
  styleUrls: ['./lista-de-empaque.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaDeEmpaqueComponent implements OnInit, OnChanges {
  @Input() partidas: EmbarqueDet[] = [];

  @Input()
  readOnly = false;

  @Output()
  edit = new EventEmitter();

  @Output()
  selectFactura = new EventEmitter();

  @ViewChild(MatSort)
  sort: MatSort;

  dataSource = new MatTableDataSource<EmbarqueDet>([]);

  displayColumns = [
    'clave',
    'descripcion',
    'compra',
    'cantidad',
    'kilosNetos',
    'kilosEstimados',
    'precio',
    'importe',
    'factura',
    'contenedor',
    'tarimas'
  ];

  @ViewChild('table')
  table: MatTable<EmbarqueDet>;

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

  sumBy(property: string) {
    return sumBy(this.dataSource.filteredData, property);
  }

  onFactura(event: Event, row: EmbarqueDet) {
    event.stopPropagation();
    this.selectFactura.emit(row);
  }
}
