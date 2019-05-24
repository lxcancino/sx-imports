import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProveedorProducto } from '@app/domain/models';

import { Observable, Subject, combineLatest } from 'rxjs';
import {
  startWith,
  map,
  tap,
  distinctUntilChanged,
  takeUntil,
  filter
} from 'rxjs/operators';

import { isObject } from 'lodash/lang';
import { CompraDet } from '@app/domain/models/compras';
// import { isEmpty } from 'lodash/isEmpty';

@Component({
  selector: 'sxi-compradet-modal',
  templateUrl: './compradet-modal.component.html'
})
export class CompradetDialogComponent implements OnInit, OnDestroy {
  form: FormGroup;

  compraDet: Partial<CompraDet>;

  productos: ProveedorProducto[];

  filtered: Observable<ProveedorProducto[]>;

  destroy$ = new Subject<boolean>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CompradetDialogComponent>,
    private fb: FormBuilder
  ) {
    this.productos = data.productos || [];
    this.compraDet = data.compraDet;
    this.buildForm();
    this.eventBus();
  }

  ngOnInit() {
    
    this.filtered = this.form.get('producto').valueChanges.pipe(
      startWith<string | ProveedorProducto>(''),
      map(value => (typeof value === 'string' ? value : value.clave)),
      map(name => (name ? this._filter(name) : this.productos.slice()))
    );

    if (this.compraDet) {
      const cve = this.compraDet.clave;
      const producto = this.productos.find(item => item.clave === cve)
      const data = {...this.compraDet, producto};
      this.form.patchValue(data);
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  displayFn(prod?: ProveedorProducto): string | undefined {
    return prod ? prod.clave : undefined;
  }

  private _filter(value: string): ProveedorProducto[] {
    const filterValue = value.toLowerCase();

    return this.productos.filter(option =>
      option.clave.toLowerCase().includes(filterValue)
    );
  }

  private buildForm() {
    this.form = this.fb.group({
      producto: [null, [Validators.required]],
      solicitado: [0, [Validators.required, Validators.min(1)]],
      precio: [0.0, [Validators.required]],
      importe: [{ value: 0.0, disabled: true }, [Validators.required]]
    });
  }

  private eventBus() {
    this.form
      .get('producto')
      .valueChanges.pipe(
        distinctUntilChanged(),
        filter(val => isObject(val)),
        takeUntil(this.destroy$)
      )
      .subscribe(p => this.registerProducto(p));

    const precio$ = this.form.get('precio').valueChanges.pipe(
      distinctUntilChanged(),
      map(value => (!!value ? value : 0.0)),
      takeUntil(this.destroy$)
    );

    const solicitado$ = this.form.get('solicitado').valueChanges.pipe(
      distinctUntilChanged(),
      filter(value => !!value),
      takeUntil(this.destroy$)
    );
    const importe$ = combineLatest(solicitado$, precio$).pipe(
      map(ar => ar[0] * ar[1]),
      takeUntil(this.destroy$)
    );

    importe$.subscribe(v => this.form.get('importe').setValue(v));
  }

  private registerProducto(p: ProveedorProducto) {
    console.log('ProveedorProducto: ', p);
    this.form.get('precio').setValue(p.costoUnitario);
  }

  submit() {
    const val = this.form.value;
    const det: Partial<CompraDet> = {
      producto: val.producto.producto,
      clave: val.producto.clave,
      descripcion: val.producto.descripcion,
      solicitado: val.solicitado,
      precio: val.precio,
      importe: val.importe
    };
    this.dialogRef.close(det);
  }

  get title() {
    return 'Agregar producto ';
  }
}
