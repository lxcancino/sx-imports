import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store';
import * as fromCatalogos from '@app/catalogos/store';

import { Observable, of } from 'rxjs';

import { Compra } from '@app/domain/models/compras';
import { Proveedor, ProveedorProducto } from '@app/domain/models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sxi-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompraComponent implements OnInit {
  compra$: Observable<Compra>;
  productos$: Observable<ProveedorProducto[]>;
  loading$: Observable<boolean>;
  title$: Observable<string>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.compra$ = this.store.pipe(select(fromStore.getSelectedCompra));

    this.productos$ = this.store.pipe(
      select(fromCatalogos.getProveedorProductos)
    );
    this.loading$ = this.store.pipe(
      select(fromCatalogos.getProveedorProductosLoading)
    );
  }

  get title() {
    return 'ALTA DE COMPRA';
  }

  onSave(compra: Partial<Compra>) {
    this.store.dispatch(new fromStore.SaveCompra({ compra }));
  }

  onUpdate(compra: { id: string; changes: Partial<Compra> }) {
    this.store.dispatch(new fromStore.UpdateCompra({ update: compra }));
  }

  onProveedorChange(proveedor: Partial<Proveedor>) {
    if (proveedor) {
      this.store.dispatch(
        new fromCatalogos.LoadProveedorProducto({ proveedorId: proveedor.id })
      );
    }
  }
}
